import { TarkovItem } from "../services/tarkovMarket";
import ItemDate from "./itemDate";

type CraftingItem = {
  item: TarkovItem;
  amount: number;
};

export interface CraftingRecipe {
  facility: string;
  crafting: {
    input: CraftingItem[];
    time: ItemDate;
    output: CraftingItem[];
  };
}
