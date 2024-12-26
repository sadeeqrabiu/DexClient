import React from "react";
import { Asset } from "../types/swap";

interface AssetSelectProps {
  assets: Asset[];
  selectedAsset: Asset | null;
  onChange: (asset: Asset) => void;
  label: string;
  disabled?: boolean;
}

export const AssetSelect = ({
  assets,
  selectedAsset,
  onChange,
  label,
  disabled,
}: AssetSelectProps) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="relative">
        <select
          className="w-full p-2 border rounded-lg appearance-none bg-white"
          value={selectedAsset?.address || ""}
          onChange={(e) => {
            const asset = assets.find((a) => a.address === e.target.value);
            if (asset) onChange(asset);
          }}
          disabled={disabled}
        >
          <option value="">Select token</option>
          {assets.map((asset) => (
            <option key={asset.address} value={asset.address}>
              {asset.symbol} - {asset.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
