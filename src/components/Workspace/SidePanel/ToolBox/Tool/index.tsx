import { mountElement } from "@/redux/editor/editorSlice";
import { TElement, TElementDropResult } from "@/shared/types";
import ItemBuilder from "@/utils/builders/ItemBuilder";
import { Tooltip } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";

export interface ToolProps {
  className?: string;
  name: string;
  icon: ReactNode | string;
}

export function Tool({ className, name, icon }: ToolProps) {
  const { focusedPageId } = useSelector((state: any) => state.editor);
  const dispatch = useDispatch();

  const item: TElement = {
    animation: {
      type: "",
    },
    position: {
      x: 0,
      y: 0,
    },
    id: "0",
    width: "0px",
    height: "0px",
    name,
    icon,
  };

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TElement",
    item,
    end: (item: TElement, monitor) => {
      const dropResult = monitor.getDropResult<TElementDropResult>();
      if (item && dropResult) {
        let { x, y } = dropResult;
        x = x ?? 0;
        y = y ?? 0;

        const _item = new ItemBuilder(name, icon, focusedPageId)
          .withAnimation({ type: "" })
          .withPosition({ x, y })
          .withSize("300px", "300px")
          .build();

        dispatch(mountElement(_item));
        // item should get bind() with the page and rendered on the page itself
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <Tooltip label={name}>
      <div
        ref={drag}
        className={`p-2 hover:bg-slate-200 border-b-[1px] cursor-grabbing flex flex-col text-center  ${className}`}
        data-testid="tool"
      >
        {typeof icon === "string" ? (
          <span className="mx-auto">
            <Image
              className="mx-auto text-xs"
              src={icon}
              alt="icon"
              width={25}
              height={25}
            />
          </span>
        ) : (
          <>
            <span className="mx-auto">{icon}</span>
            <span className="mx-auto text-xs">{name}</span>
          </>
        )}
      </div>
    </Tooltip>
  );
}
