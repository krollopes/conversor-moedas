import { useCurrencyConverter } from '../hooks/useCurrencyConverter';

const CurrencyConverter = () => {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    convertCurrency,
    exchangeRates,
  } = useCurrencyConverter();

  return (
    <div className="convert">
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder='Digite o valor...'
        min={0}
      />
      <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {Object.keys(exchangeRates).map((currency) => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <button onClick={convertCurrency}>Converter</button>
      <p id="result">{result}</p>
    </div>
  );
};

export default CurrencyConverter;