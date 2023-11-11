"use client";

import { ChakraProvider } from "@chakra-ui/react";

import Topbar from "@/components/Topbar/";
import { Workspace } from "@/components/Workspace/";
import store from "../redux/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <section className="min-h-screen">
          <Topbar />
          <Workspace />
        </section>
      </Provider>
    </ChakraProvider>
  );
}
