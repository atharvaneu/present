import { ChakraProvider, Button, Input } from "@chakra-ui/react";
import Topbar from "@/components/Topbar/";
import { Workspace } from "@/components/Workspace/";

export default function Home() {
  return (
    <ChakraProvider>
      <section className="min-h-screen">
        <Topbar />

        <Workspace />
      </section>
    </ChakraProvider>
  );
}
