// curl -H x-api-key=A2Ga3au3N7xnHYVu https://tarkov-market.ru/api/v1/item?q=labs

const API_URL = "https://tarkov-market.ru/api/v1";
const API_KEY = "A2Ga3au3N7xnHYVu";

export const query = (item: string) => {
  return fetch(`${API_URL}/item?q=${encodeURIComponent(item)}`, {
    headers: {
      "x-api-key": API_KEY
    }
  });
};

export const getIcon = (item: string) => {
  return query(item)
    .then(response => response.json())
    .then(response => {
      return { url: response[0].icon, name: response[0].name };
    });
};

// you will have data like
// ```
//  [
//      {
//      "name": "Red Rebel Ice pick",
//      "price": 2949000,
//      "slots": 3,
//      "diff24h": -1.5,
//      "diff7days": 8.36,
//      "icon": "https://tarkov-market.ru/images/red-rebel.png",
//      "link": "https://tarkov-market.ru/en/item/red_rebel_ice_pick",
//      "reference": "https://www.patreon.com/tarkov_market"
//      }
//  ]
// ```
