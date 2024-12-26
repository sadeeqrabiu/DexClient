export interface Asset {
    address: string;
    symbol: string;
    name: string;
    decimals: number;
    image_url: string;
  }
  
  export interface SwapFormData {
    offerAsset: Asset | null;
    askAsset: Asset | null;
    amount: string;
  }
  