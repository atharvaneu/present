import Image from "next/image";

import { TElement } from "@/shared/types";

export interface ElementProps {
  element: TElement;
  onLeftClick: (event: any) => void;
  onRightClick: (event: any) => void;
  className?: string;
}

export function Element({
  element,
  onLeftClick,
  onRightClick,
  className,
}: ElementProps) {
  const { icon, position, width, height } = element;

  return (
    <div
      style={{
        top: position.y,
        left: position.x,
        width,
        height,
      }}
      className={`absolute hover:border border-slate-800 border-dashed ${className}`}
      onClick={onLeftClick}
      onContextMenu={onRightClick}
    >
      {typeof icon === "string" ? (
        <Image
          className="mx-auto text-xs"
          src={icon}
          alt="icon"
          width={parseInt(width.substring(0, width.length - 2))}
          height={parseInt(height.substring(0, height.length - 2))}
        />
      ) : (
        icon
      )}
    </div>
  );
}
