"use client";

import { memo } from "react";
import { useDrop } from "react-dnd";

export interface EditorProps {
  className?: string;
}

export const Editor = memo(function Editor({ className }: EditorProps) {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "any",
    drop: () => ({ name: "Dustbin" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = "#222";
  if (isActive) {
    backgroundColor = "darkgreen";
  } else if (canDrop) {
    backgroundColor = "darkkhaki";
  }

  return (
    <div className={`p-4 flex align-middle justify-center ${className}`}>
      <div
        ref={drop}
        id="workarea"
        className="w-3/4 bg-orange-50 rounded-sm"
        data-testid="editor"
      ></div>
    </div>
  );
});
