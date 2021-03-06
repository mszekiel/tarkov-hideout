import { Recipe } from "../types/Recipe";
import { ItemDate } from "../types/ItemDate";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:2137"
    : "";

export async function getRecipes(start: number = 0) {
  const response = await fetch(
    `${API_URL}/hideout/recipes?start=${start}&limit=100`
  );
  const body: Recipe[] = await response.json();
  return body.map((recipe: any) => {
    const time = new ItemDate(recipe.time);
    return new Recipe({ ...recipe, time });
  });
}

export async function getChangelog() {
  return await fetch(`${API_URL}/hideout/changelog`).then(response =>
    response.json()
  );
}
