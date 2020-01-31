// curl -H x-api-key=A2Ga3au3N7xnHYVu https://tarkov-market.ru/api/v1/item?q=labs

const API_URL = "https://tarkov-market.ru/api/v1";
const API_KEY = "A2Ga3au3N7xnHYVu";

export interface TarkovItem {
  name: string;
  price: number;
  slots: number;
  diff24h: number;
  diff7days: number;
  icon: string;
  link: string;
  reference: string;
}

export const query: (item: string) => Promise<TarkovItem[]> = item => {
  return fetch(`${API_URL}/item?q=${encodeURIComponent(item)}`, {
    headers: {
      "x-api-key": API_KEY
    }
  })
    .then(res => res.json())
    .then(items => <TarkovItem[]>items);
};
