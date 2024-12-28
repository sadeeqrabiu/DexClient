import React from "react";
import { OmnistonProvider } from "@ston-fi/omniston-sdk-react";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { SwapContainer } from "./components/SwapContainer";
import { TonConnectButton } from "@tonconnect/ui-react";
import Wallet from "./components/Wallet";
import Header from "./components/Header";
import WalletInfo from "./components/WalletInfo";
import { SwapFormHeader } from "./components/swap-form-header";

const App = () => {
  return (
    <div className="bg-slate-50">
      <div className="p-4">
       
        {/* <WalletInfo/> */}
        <Header />
        <SwapFormHeader />
        <SwapContainer />
      </div>
    </div>

    // <TonConnectUIProvider manifestUrl={import.meta.env.VITE_TONCONNECT_MANIFEST_URL}>
    //   <OmnistonProvider apiUrl={import.meta.env.VITE_OMNISTON_API_URL}>
    //     <SwapContainer />
    //   </OmnistonProvider>
    // </TonConnectUIProvider>
  );
};

export default App;
