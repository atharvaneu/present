/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Tab, TabList, TabPanels, Tabs } from "@chakra-ui/react";

import { Animations } from "./Animations";
import { Previews } from "./Previews";
import ToolBox from "./ToolBox";

export interface SidePanelProps {
  className?: string;
}

export function SidePanel({ className }: SidePanelProps) {
  return (
    <div className={`border-r border-slate-600 p-4 ${className}`}>
      <Tabs>
        <TabList>
          <Tab>Slides</Tab>
          <Tab>Animations</Tab>
          <Tab>Toolbox</Tab>
        </TabList>

        <TabPanels>
          <Previews />
          <Animations />
          <ToolBox />
        </TabPanels>
      </Tabs>
    </div>
  );
}
