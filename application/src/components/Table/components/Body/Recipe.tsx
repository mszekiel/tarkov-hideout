import * as React from "react";
import Table from "../../Table";
import Process from "../../../Process";
import { Recipe as _Recipe } from "../../../../types/Recipe";

export const Recipe = (recipe: _Recipe) => (
  <Table.Body.Row key={recipe.profit * Math.random()}>
    <Table.Body.Item>{recipe.facility.name}</Table.Body.Item>
    <Table.Body.Item>{recipe.facility.level}</Table.Body.Item>
    <Table.Body.Item>
      <Process input={recipe.input} time={recipe.time} output={recipe.output} />
    </Table.Body.Item>
    <Table.Body.Item>
      <Table.Price>{recipe.profit}</Table.Price>
    </Table.Body.Item>
    <Table.Body.Item>
      <Table.Price>{Math.round(recipe.time.getHourFactor() * recipe.profit)}</Table.Price>
    </Table.Body.Item>
  </Table.Body.Row>
);

export default Recipe;
