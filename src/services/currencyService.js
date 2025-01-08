import { fetchExchangeRates } from '../api/currencyApi';

export const getExchangeRates = async () => {
  try {
    const rates = await fetchExchangeRates();
    return rates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};