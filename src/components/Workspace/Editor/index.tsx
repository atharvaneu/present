"use client";

import { memo } from "react";
import { useDrop } from "react-dnd";

import { Page } from "./Page";
import { useSelector } from "react-redux";
import {
  EditorState,
  TElement,
  TElementDropResult,
  TPage,
} from "@/shared/types";

export interface EditorProps {
  className?: string;
}

export const Editor = memo(function Editor({ className }: EditorProps) {
  const { pages, focusedPageId } = useSelector((state: any) => state.editor);

  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "TElement",
    drop: (item: TElement, monitor): TElementDropResult => {
      let relativeX, relativeY;
      const workAreaElement = document.getElementById("workarea");
      const clientOffset = monitor.getClientOffset();

      if (workAreaElement && clientOffset) {
        const workAreaRect = workAreaElement?.getBoundingClientRect();

        relativeX = clientOffset.x - workAreaRect.left;
        relativeY = clientOffset.y - workAreaRect.top;
      }

      return { item, x: relativeX, y: relativeY };
    },
    collect: (monitor) => {
      return {
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      };
    },
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  const page = pages.filter((p: TPage) => p.id === focusedPageId)[0];

  return (
    <div className={`p-4 flex align-middle justify-center ${className}`}>
      <Page drop={drop} page={page} />
    </div>
  );
});
