import React from "react";
import ReactDOM from "react-dom/client";   //Routing Imports

import App from "./App"; //App component

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react"; //styling imports

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
