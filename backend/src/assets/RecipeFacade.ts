import { Expose, Type } from 'class-transformer';
import { Item } from 'src/types/Item';
import { RecipeInterface } from 'src/types/Recipe';
import { ItemDate } from 'src/types/ItemDate';
import { ItemFacade } from './ItemFacade';
import { Resource } from 'src/types/Resource';

@Expose()
export class RecipeFacade implements RecipeInterface {
  @Type(() => ItemFacade)
  input: Resource[];
  @Type(() => ItemFacade)
  output: Resource[];
  facility: string;
  time: ItemDate;
  profit: number;

  constructor(recipe: RecipeInterface) {
    Object.assign(this, recipe);
  }
}
