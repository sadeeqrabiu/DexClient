import { useCallback } from 'react';
import { Blockchain, useOmniston } from "@ston-fi/omniston-sdk-react";
import { useTonConnectUI } from "@tonconnect/ui-react";
import { useTonAddress } from "@tonconnect/ui-react";

export const useSwapExecution = () => {
  const walletAddress = useTonAddress();
  const [tonConnect] = useTonConnectUI();
  const omniston = useOmniston();

  const executeSwap = useCallback(async (quote, slippageBps = 100) => {
    try {
      const tx = await omniston.buildTransfer({
        quote,
        sourceAddress: {
          blockchain: Blockchain.TON,
          address: walletAddress,
        },
        destinationAddress: {
          blockchain: Blockchain.TON,
          address: walletAddress,
        },
        maxSlippageBps: slippageBps,
      });

      const result = await tonConnect.sendTransaction({
        validUntil: Date.now() + 1000000,
        messages: tx.transaction.ton.messages.map((message) => ({
          address: message.targetAddress,
          amount: message.sendAmount,
          payload: message.payload,
        })),
      });

      return { success: true, txId: result };
    } catch (error) {
      return { success: false, error };
    }
  }, [omniston, tonConnect, walletAddress]);

  return { executeSwap };
};
