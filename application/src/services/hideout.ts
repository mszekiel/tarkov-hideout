import { Recipe } from "../types/Recipe";

export function getRecipes() {
  return fetch(`/hideout/recipes`)
    .then(response => response.json())
    .then((result:Recipe[]) => result);
}
