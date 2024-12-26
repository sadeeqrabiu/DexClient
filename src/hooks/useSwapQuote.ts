// src/hooks/useSwapQuote.ts
import { useRfq } from "@ston-fi/omniston-sdk-react";
import { Blockchain, SettlementMethod, Quote } from '@ston-fi/omniston-sdk-react';
import { SwapFormData } from '../types/swap';
import { formatUnits, parseUnits } from '../lib/numbers';

export const useSwapQuote = (formData: SwapFormData) => {
  const { offerAsset, askAsset, amount } = formData;
  
  const canFetchQuote = offerAsset && askAsset && amount;
  
  const formattedAmount = canFetchQuote 
    ? parseUnits(amount, offerAsset.decimals).toString()
    : null;

  const { data: quoteResponse, isLoading, error } = useRfq(
    canFetchQuote ? {
      settlementMethods: [SettlementMethod.SETTLEMENT_METHOD_SWAP],
      askAssetAddress: {
        blockchain: Blockchain.TON,
        address: askAsset.address,
      },
      offerAssetAddress: {
        blockchain: Blockchain.TON,
        address: offerAsset.address,
      },
      amount: {
        offerUnits: formattedAmount,
      },
    } : null
  );

  // Handle the quote response
  const quote = quoteResponse?.type === 'quoteUpdated' ? quoteResponse.quote : null;
  
  const estimatedOutput = quote && askAsset 
    ? formatUnits(quote.askUnits, askAsset.decimals)
    : null;

  return { quote, isLoading, error, estimatedOutput };
};