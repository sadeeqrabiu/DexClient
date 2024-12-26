import React, { useState } from 'react';
import { useAssetList } from "@ston-fi/omniston-sdk-react";
import { useSwapForm } from '../hooks/useSwapForm';
import { useSwapQuote } from '../hooks/useSwapQuote';
import { useSwapExecution } from '../hooks/useSwapExecution';
import { AssetSelect } from './AssetSelect';
import { SwapInput } from './SwapInput';

export const SwapContainer = () => {
  const { data: assetList, isLoading: assetsLoading } = useAssetList();
  const { formData, updateFormData, resetForm } = useSwapForm();
  const { quote, isLoading: quoteLoading, estimatedOutput } = useSwapQuote(formData);
  const { executeSwap } = useSwapExecution();
  const [error, setError] = useState<string | null>(null);

  const handleSwap = async () => {
    if (!quote) return;

    setError(null);
    const { success, error } = await executeSwap(quote);
    
    if (success) {
      resetForm();
    } else {
      setError(error.message);
    }
  };

  if (assetsLoading) {
    return <div>Loading assets...</div>;
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-xl font-bold mb-4">Swap Tokens</h2>
      
      <div className="space-y-4">
        <AssetSelect
          assets={assetList?.assets || []}
          selectedAsset={formData.offerAsset}
          onChange={(asset) => updateFormData('offerAsset', asset)}
          label="You Pay"
        />

        <SwapInput
          amount={formData.amount}
          onChange={(value) => updateFormData('amount', value)}
          disabled={!formData.offerAsset}
        />

        <AssetSelect
          assets={assetList?.assets || []}
          selectedAsset={formData.askAsset}
          onChange={(asset) => updateFormData('askAsset', asset)}
          label="You Receive"
        />

        {estimatedOutput && (
          <div className="text-sm text-gray-600">
            Expected output: {estimatedOutput}
          </div>
        )}

        {error && (
          <div className="text-sm text-red-500 p-2 bg-red-50 rounded">
            {error}
          </div>
        )}

        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg disabled:opacity-50"
          onClick={handleSwap}
          disabled={!quote || quoteLoading}
        >
          {quoteLoading ? 'Getting quote...' : 'Swap'}
        </button>
      </div>
    </div>
  );
};