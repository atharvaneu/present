import { TabPanel } from "@chakra-ui/react";
import Image from "next/image";
import { Tool } from "./Tool";

export interface ToolBoxProps {
  className?: string;
}

export default function ToolBox({ className }: ToolBoxProps) {
  return (
    <TabPanel>
      <div className={`grid grid-cols-4 ${className}`}>
        <Tool name={"Ease in out"} icon={"icons/ease-in-out.svg"} />
        <Tool name={"Ease in"} icon={"icons/ease-in.svg"} />
        <Tool name={"Ease out"} icon={"icons/ease-out.svg"} />
        <Tool name={"Cat"} icon={"/huh_cat.jpg"} />
      </div>
    </TabPanel>
  );
}

export { Tool } from "./Tool";
