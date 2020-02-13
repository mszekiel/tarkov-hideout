import { Item, ItemInterface } from './Item';
import {ItemDate} from './ItemDate';
import { Resource } from './Resource';
import { OutputItem } from './OutputItem';

export class Recipe implements RecipeInterface {
  facility: string;
  input: Resource[];
  output: Resource[];
  time: ItemDate;
  profit: number;

  constructor(data: {
    facility: string;
    input: OutputItem[];
    output: OutputItem[];
    time: ItemDate;
  }) {
    const profit =
      data.output
        .map(item => parseFloat((item.price * item.amount).toFixed(2)))
        .reduce((prev, next) => prev + next) -
      data.input
        .map(item => parseFloat((item.price * item.amount).toFixed(2)))
        .reduce((prev, next) => prev + next);

    Object.assign(this, { ...data, profit });
  }
}

export interface RecipeInterface {
  facility: string;
  input: Resource[];
  output: Resource[];
  time: ItemDate;
  profit: number;
}
