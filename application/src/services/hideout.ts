import { Recipe } from "../types/Recipe";

export function getRecipes() {
  return fetch(`https://tarkov-calculator.herokuapp.com/hideout/recipes`)
    .then(response => response.json())
    .then((result:Recipe[]) => result);
}
