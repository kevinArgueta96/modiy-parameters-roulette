import { CONFIG } from '../../env.config'

async function getTotals() {
  const url = CONFIG.apiUrlQA+"total-prices.json";
  const response = await fetch(url);
  return response.json();
}

async function setNewTotal(data) {
  const url = CONFIG.apiUrlQA+ "total-prices.json";
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  return response.json();
}

async function getHour() {
  const url = CONFIG.apiUrlQA+"schedule-range.json";
  const response = await fetch(url);
  return response.json();
}

async function setHour(data) {
  const url = CONFIG.apiUrlQA+"schedule-range.json";
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(url, options);
  return response.json();
}

async function getGiftCards() {
  try { 
    const url =  CONFIG.apiUrlQA+"gift-cards.json";
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return 'error';
  }
}

async function setGiftCards(data) {
  try {
    const url = CONFIG.apiUrlQA+"gift-cards.json";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    return 'error';
  }
}

async function setTopPrices(data) {
  try {
    const url = CONFIG.apiUrlQA+"top-prices.json";
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    return 'error';
  }
}

async function getTopPrices() {
  try { 
    const url =  CONFIG.apiUrlQA+"top-prices.json";
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    return 'error';
  }
}


export default {
  getTotals,
  setNewTotal,
  setHour,
  getHour,

  getGiftCards,
  getTopPrices,

  setGiftCards,
  setTopPrices
};
