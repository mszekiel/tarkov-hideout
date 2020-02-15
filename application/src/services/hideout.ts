import { Recipe } from "../types/Recipe";
import { ItemDate } from "../types/ItemDate";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:2137"
    : "https://tarkov-calculator.herokuapp.com";

export async function getRecipes(start: number = 0) {
  const response = await fetch(`${API_URL}/hideout/recipes?start=${start}`);
  const body: Recipe[] = await response.json();
  return body.map((recipe: any) => {
    const time = new ItemDate(recipe.time);
    return new Recipe({ ...recipe, time });
  });
}
