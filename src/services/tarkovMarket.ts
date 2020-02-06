// curl -H x-api-key=A2Ga3au3N7xnHYVu https://tarkov-market.ru/api/v1/item?q=labs

import { CraftingRecipe } from "../utils/craftingRecipe";
import { TarkovItem } from "../utils/tarkovItem";

const API_URL = "https://tarkov-market.ru/api/v1";
const API_KEY = "A2Ga3au3N7xnHYVu";

// facility: string;
// crafting: {
//   input: CraftingItem[];
//   time: ItemDate;
//   output: CraftingItem[];22
// };

const recipes = [
  {
    facility: { name: "Intelligence Center", level: 1 },
    profit: 1504,
    crafting: {
      input: [
        { name: "Broken GPhone", amount: 1 },
        { name: "Broken GPhone X", amount: 1 },
        { name: "SSD Drive", amount: 1 }
      ],
      time: [34, 14, 0],
      output: [{ name: "Secure Flash Drive", amount: 3 }]
    }
  },
  {
    facility: { name: "Nutrion Unit", level: 1 },
    profit: 1504,
    crafting: {
      input: [
        { name: "Army Crackers", amount: 2 },
        { name: "Can of beef stew", amount: 1 },
        { name: "Squash spread", amount: 1 }
      ],
      time: [0, 48, 0],
      output: [{ name: "Iskra lunch box", amount: 2 }]
    }
  }
];

export const query: (item: string) => Promise<TarkovItem[]> = item => {
  return fetch(`${API_URL}/item?q=${encodeURIComponent(item)}`, {
    headers: {
      "x-api-key": API_KEY
    }
  })
    .then(res => res.json())
    .then(items => <[]>items)
    .then(items => items.map(item => new TarkovItem(item)));
};

export const getRecipes: () => Promise<CraftingRecipe[]> = () => {
  return Promise.resolve(recipes.map(recipe => <CraftingRecipe>recipe));
};
