import ItemDate from "./ItemDate";
import { Resource } from "./Resource";

export interface Recipe {
  facility: string;
  input: Resource[];
  output: Resource[];
  time: ItemDate;
  profit: number;
}