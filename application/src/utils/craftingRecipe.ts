import { TarkovItem } from "./tarkovItem";
import ItemDate from "./itemDate";

export interface CraftingItem {
  item: TarkovItem;
  amount: number;
}

export interface Facility {
  name: string;
  level: number;
}

export interface ItemData {
  name: string;
  amount: number;
}

export class CraftingRecipe {
  facility: Facility;
  profit: number;
  crafting: {
    input: ItemData[];
    time: [number, number, number];
    output: ItemData[];
  };
}
 