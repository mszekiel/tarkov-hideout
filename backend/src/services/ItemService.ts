import { ItemProvider } from 'src/providers/ItemProvider';
import { Item } from 'src/types/Item';
import { Injectable } from '@nestjs/common';
import { recipes, uniqueNames } from 'src/assets/RecipeList';
import { WithPagination } from 'src/types/WithPagination';
import { Recipe } from 'src/types/Recipe';
import ItemDate from 'src/types/ItemDate';
import { classToPlain } from 'class-transformer';
import { RecipeFacade } from 'src/assets/RecipeFacade';

@Injectable()
export class ItemService {
  provider: ItemProvider;

  constructor(provider: ItemProvider) {
    this.provider = provider;
  }

  async getRecipes(request: WithPagination) {
    const items = await Promise.all(
      uniqueNames.map(async name => await this.provider.fetch(name)),
    );
    return recipes
      .map(
        recipe =>
          new Recipe({
            facility: recipe.facility,
            input: recipe.input.map(({ name, amount }) => ({
              ...items.find(item => item.name === name),
              amount,
            })),
            output: recipe.output.map(({ name, amount }) => ({
              ...items.find(item => item.name === name),
              amount,
            })),
            time: new ItemDate(recipe.time),
          }),
      )
      .map(recipe => classToPlain(new RecipeFacade(recipe)));
  }
}
