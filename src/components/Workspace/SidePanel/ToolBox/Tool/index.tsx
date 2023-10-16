import { ReactNode } from "react";
import { useDrag } from "react-dnd";

export interface ToolProps {
  className?: string;
  name: string;
  icon: ReactNode;
}

export function Tool({ className, name, icon }: ToolProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "any",
    item: { name },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<any>();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`p-4 hover:bg-slate-200 rounded cursor-grabbing flex flex-col text-center ${className}`}
      data-testid="tool"
      title={name}
    >
      <span className="mx-auto">{icon}</span>
      {name}
    </div>
  );
}
