import React from 'react'
import { useTonAddress } from '@tonconnect/ui-react';


const WalletInfo = () => {
    const address = useTonAddress();

    if (!address) return null;
  
    const shortenAddress = (addr) => {
      return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };

  return (
    <div className="mt-4 p-4 bg-slate-50 rounded-lg">
      <p className="text-sm text-slate-500">Connected Wallet:</p>
      <p className="font-mono text-sm break-all">{address}</p>
    </div>
  )
}

export default WalletInfo
