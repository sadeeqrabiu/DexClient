import React from "react";

interface SwapInputProps {
  amount: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  error?: string;
}

export const SwapInput = ({
  amount,
  onChange,
  disabled,
  error,
}: SwapInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (/^\d*\.?\d*$/.test(value)) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col gap-1">
      <input
        type="text"
        className={`w-full p-2 border rounded-lg ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder="0.0"
        value={amount}
        onChange={handleChange}
        disabled={disabled}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
