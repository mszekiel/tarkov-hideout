import { HideoutProvider } from 'src/providers/item.provider';
import { Injectable } from '@nestjs/common';
import { recipes, uniqueNames } from 'src/assets/RecipeList';
import { WithPagination } from 'src/types/WithPagination';
import { Recipe } from 'src/types/Recipe';
import { classToPlain } from 'class-transformer';
import { RecipeFacade } from 'src/assets/RecipeFacade';

@Injectable()
export class HideoutService {
  provider: HideoutProvider;

  constructor(provider: HideoutProvider) {
    this.provider = provider;
  }

  async getRecipes(query: WithPagination) {
    const items = await Promise.all(
      uniqueNames.map(async name => await this.provider.fetch(name)),
    );

    return recipes
      .slice(query.start, query.limit + query.start)
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
            time: [recipe.time[0], recipe.time[1], recipe.time[2]],
          }),
      )
      .map(recipe => classToPlain(new RecipeFacade(recipe)));
  }
}
