const apiKey = '27da610db9213ab3d1922275';
const API_URL = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

export const fetchExchangeRates = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rates');
  }
  const data = await response.json();
  return data.conversion_rates;
};