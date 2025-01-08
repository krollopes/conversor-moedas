import { useEffect, useState } from 'react';
import { getExchangeRates } from '../services/currencyService';

export const useCurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('');
  const [toCurrency, setToCurrency] = useState('');
  const [result, setResult] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const rates = await getExchangeRates();
        setExchangeRates(rates);
        setFromCurrency(Object.keys(rates)[0]);
        setToCurrency(Object.keys(rates)[1]);
      } catch (error) {
        setResult('Failed to fetch exchange rates');
      }
    };
    fetchRates();
  }, []);

  const convertCurrency = () => {
    if (isNaN(amount) || amount <= 0) {
      setResult('Digite um valor válido!');
      return;
    }

    if (fromCurrency && toCurrency) {
      const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      const convertedAmount = (amount * rate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`);
    }
  };

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    convertCurrency,
    exchangeRates,
  };
};