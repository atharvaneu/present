"use client";

import { Button, Input, Stack } from "@chakra-ui/react";
import * as React from "react";

export default function Topbar() {
  const [file, setFile] = React.useState<string>("File name.ppt");

  return (
    <nav className="flex justify-between p-6 bg-slate-200 border-b-2 border-slate-700">
      <div>
        <Input
          value={file}
          className="font-bold text-xl"
          onChange={(e) => setFile(e.target.value)}
          size={"sm"}
        />
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
}
