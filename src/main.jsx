import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { OmnistonProvider } from "@ston-fi/omniston-sdk-react";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TonConnectUIProvider
    manifestUrl={import.meta.env.VITE_TONCONNECT_MANIFEST_URL}
  >
    <OmnistonProvider apiUrl={import.meta.env.VITE_OMNISTON_API_URL}>
      <App />
    </OmnistonProvider>
  </TonConnectUIProvider>
);
