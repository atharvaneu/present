"use client";

import { ChakraProvider } from "@chakra-ui/react";

import store from "../redux/store";
import { Provider } from "react-redux";
import App from "./App";

export default function Home() {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  );
}
