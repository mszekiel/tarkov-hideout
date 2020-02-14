import { ItemDate } from "./ItemDate";
import { Resource } from "./Resource";

export interface Facility {
  name: string;
  level: number;
}

export class Recipe {
  facility: Facility;
  input: Resource[];
  output: Resource[];
  time: ItemDate;
  profit: number;

  constructor(data: {
    facility: string;
    input: Resource[];
    output: Resource[];
    time: ItemDate;
    profit: number;
  }) {
    return Object.assign(this, data);
  }
}
