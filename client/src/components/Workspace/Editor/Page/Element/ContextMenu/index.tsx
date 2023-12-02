import { ContextMenuState } from "@/shared/types";

export interface ContextMenuProps {
  className?: string;
  initSettings: ContextMenuState;
}

const options = [
  {
    name: "Set animation",
  },
  {
    name: "Set name",
  },
  {
    name: "Set size",
  },
];

export function ContextMenu({ initSettings, className }: ContextMenuProps) {
  const { visible, left, top } = initSettings;
  return (
    <div
      style={{
        position: "fixed",
        top,
        left,
        display: visible ? "block" : "none",
      }}
      className={`w-48 h-80 bg-black/30 text-white rounded-sm transition ease-in-out duration-200 backdrop-blur-md ${className}`}
    >
      {options.map(({ name }) => (
        <p
          key={name}
          className="p-2 pb-4 transition ease-in-out font-semibold rounded hover:scale-105 duration-150 cursor-pointer"
        >
          {name}
        </p>
      ))}
    </div>
  );
}
