import { Recipe } from "../types/Recipe";
import { ItemDate } from "../types/ItemDate";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:2137"
    : "https://tarkov-calculator.herokuapp.com";

export function getRecipes(skip: number = 0) {
  return fetch(`${API_URL}/hideout/recipes`)
    .then(response => response.json())
    .then(result =>
      result.map((recipe: any) => {
        const time = new ItemDate(recipe.time);
        return new Recipe({ ...recipe, time });
      })
    );
}
