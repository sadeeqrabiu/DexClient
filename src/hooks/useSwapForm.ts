import { useState, useCallback } from 'react';
import { SwapFormData } from '../types/swap';

export const useSwapForm = () => {
  const [formData, setFormData] = useState<SwapFormData>({
    offerAsset: null,
    askAsset: null,
    amount: '',
  });

  const updateFormData = useCallback((field: keyof SwapFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({
      offerAsset: null,
      askAsset: null,
      amount: '',
    });
  }, []);

  return { formData, updateFormData, resetForm };
};