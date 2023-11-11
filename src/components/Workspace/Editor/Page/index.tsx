import { ConnectDropTarget } from "react-dnd";
import { useSelector } from "react-redux";
import { useState } from "react";

import { ContextMenuState, TPage } from "@/shared/types";
import { Element } from "./Element";
import { ContextMenu } from "./Element/ContextMenu";

const tmap: any = {
  1: "bg-orange-100",
  2: "bg-blue-100",
  3: "bg-red-100",
  4: "bg-teal-100",
  5: "bg-purple-100",
};

const initContextMenuState: ContextMenuState = {
  left: "0",
  top: "0",
  visible: false,
};

export interface PageProps {
  className?: string;
  drop: ConnectDropTarget;
  page: TPage;
}

export function Page({ className, drop, page }: PageProps) {
  const [contextMenuState, setContextMenuState] =
    useState<ContextMenuState>(initContextMenuState);

  const { focusedPageId, pages } = useSelector((state: any) => state.editor);
  const targetPage: TPage = pages.find((e: TPage) => e.id === focusedPageId);

  if (!targetPage) {
    console.error(`PageError: Page with ${focusedPageId} not found!`);
    return <div>Select a page from the sidepanel</div>;
  }

  const inx = page?.id.charAt(page?.id.length - 1);
  const bg = tmap[+inx];

  function handleLeftClick(event: MouseEvent) {
    event.preventDefault();

    setContextMenuState((prev) => {
      return {
        ...prev,
        visible: false,
      };
    });
  }

  function handleRightClick(event: MouseEvent) {
    event.preventDefault();

    setContextMenuState((prev) => {
      return {
        ...prev,
        left: `${event.clientX}px`,
        top: `${event.clientY}px`,
        visible: true,
      };
    });
  }

  return (
    <div
      ref={drop}
      id="workarea"
      className={`w-3/4 relative rounded-sm mx-[45px] ${bg} ${className}`}
      data-testid="editor"
    >
      {targetPage?.elements.map((element) => (
        <Element
          key={element.id}
          element={element}
          onLeftClick={handleLeftClick}
          onRightClick={handleRightClick}
        />
      ))}
      <ContextMenu initSettings={contextMenuState} />
    </div>
  );
}
