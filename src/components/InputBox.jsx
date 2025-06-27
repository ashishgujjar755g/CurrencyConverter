function InputBox(
      {     
            amount,
            onAmountChange,
            onCurrencyChange,
            lebel,
            className="",
            selectCurrency="usd",
            currencyOptions=[],
            amountDisabled="false",
            currencyDisabled="false",
      }
){
      return (
        <>
          <div
            className={`bg-white p-3 rounded-lg text-sm flex justify-between ${className}`}
          >
            <div className="w-1/2">
              <label htmlFor="amountInput">{lebel}</label>
              <input
                type="number"
                id="amountInput"
                disabled={amountDisabled}
                className="outline-none w-full bg-transparent py-2 border-2 border-blue-600 rounded-lg px-1.5 placeholder:text-gray-900"
                placeholder="0"
                onChange={(e) =>
                  onAmountChange && onAmountChange(Number(e.target.value))}
                  value={amount}
                
              />
            </div>
            <div>
              <p className="text-black mb-2 w-full">Currency Type</p>
              <select
                className="bg-gray-100"
                value={selectCurrency}
                disabled={currencyDisabled}
                onChange={(e) =>
                  onCurrencyChange && onCurrencyChange(e.target.value)
                }
              >
                {currencyOptions.map((Currency) => {
                  <option value={Currency} key={Currency}>
                    {Currency}
                  </option>;
                })}
              </select>
            </div>
          </div>
        </>
      );
}
export default InputBox;