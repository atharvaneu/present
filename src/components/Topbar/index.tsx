"use client";

import { Button, Input, Stack, Tooltip } from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addPage } from "@/redux/editor/editorSlice";

export default React.memo(function Topbar() {
  const [file, setFile] = React.useState<string>("File name.ppt");
  const { pages } = useSelector((state: any) => state.page);
  const dispatch = useDispatch();

  function handleClick(operation: "add" | "delete") {
    switch (operation) {
      case "add":
        dispatch(addPage());
        break;
      case "delete":
        console.log("delete pressed");
        break;
    }
  }

  return (
    <nav className="flex justify-between p-6 bg-slate-200 border-b-2 border-slate-700">
      <div>
        <Input
          value={file}
          className="font-bold text-xl"
          onChange={(e) => setFile(() => e.target.value)}
          size={"sm"}
        />
      </div>
      <div className="flex gap-5">
        <Tooltip label="Add a new slide">
          <Button onClick={() => handleClick("add")}>new slide</Button>
        </Tooltip>
        <Tooltip label="Add a new slide">
          <Button onClick={() => handleClick("add")}>share</Button>
        </Tooltip>
        <Tooltip label="Add a new slide">
          <Button onClick={() => handleClick("add")}>&</Button>
        </Tooltip>
        <Tooltip label="Delete current slide">
          <Button
            onClick={() => handleClick("delete")}
            variant="outline"
            colorScheme="red"
          >
            delete
          </Button>
        </Tooltip>
      </div>
      <div>
        <Stack spacing={4} direction="row" align="center">
          <Button colorScheme="purple" size="xs">
            Settings
          </Button>
          <Button colorScheme="purple" size="xs">
            Logout
          </Button>
        </Stack>
      </div>
    </nav>
  );
});
