import React, { useId } from "react";

function InputBox({
  label,
  amount,
  
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisabled= false,
  currencyDisabled= false,
  className = "",
  onAmountChange,
}) {
  const amountInputId = useId();
  return (
    <>
      <div className={`bg-gray-300 p-3 rounded-lg text-sm flex ${className}`}>
        <div className="w-1/2">
          <label htmlFor={amountInputId}>{label}</label>
          <input
            type="number"
            id={amountInputId}
            disabled={amountDisabled}
            className="outline-none w-full bg-transparent py-2 border-2 border-blue-600 rounded-lg px-1.5 placeholder:text-gray-900 .no-spinner"
            placeholder="0"
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
              
            }
            value={amount}
            style={{}}
          />
        </div>
        <div className="w-1/2 flex flex-wrap justify-end text-right">
          <p className="text-black mb-2 w-full">Currency Type</p>
          <select
            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer border-blue-600 border-2 outline-none"
            value={selectCurrency}
            disabled={currencyDisabled}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
          >
            {currencyOptions.map((currency) => (
              <option value={currency} key={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
export default InputBox;
