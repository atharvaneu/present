import {
  ArrowBackIcon,
  ArrowDownIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { TabPanel } from "@chakra-ui/tabs";
import { Tool } from "../ToolBox";

export interface AnimationsProps {
  className?: string;
}

const tools = [
  {
    name: "Ease in",
    icon: "icons/ease-in.svg",
  },
  {
    name: "Ease out",
    icon: "icons/ease-out.svg",
  },
  {
    name: "Ease in out",
    icon: "icons/ease-in-out.svg",
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
  {
    name: "Linear",
    icon: <ArrowDownIcon />,
  },
];

export function Animations({ className }: AnimationsProps) {
  return (
    <TabPanel>
      <div className="grid grid-cols-4">
        {tools.map(({ name, icon }) => {
          function generateKey(s: string) {
            return s.trim().replace(" ", "").toLowerCase();
          }
          return <Tool key={generateKey(name)} name={name} icon={icon} />;
        })}
      </div>
    </TabPanel>
  );
}
