export interface ToolBoxProps {
  className?: string;
}

export default function ToolBox({ className }: ToolBoxProps) {
  return <div className={`${className}`}> This is the toolBox</div>;
}

export { Tool } from "./Tool";
