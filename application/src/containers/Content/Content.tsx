import * as React from "react";
import { Recipe } from "../../types/Recipe";
import { getRecipes } from "../../services/hideout";
import Table from "../../components/Table";
import Process from "../../components/Process";
import { debounce } from "debounce";

const Content = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  const updateRecipes = (start = 0) => {
    debounce(
      () => {
        getRecipes(start).then(result => {
          setRecipes(result);
        });
      },
      1500,
      true
    )();
  };

  React.useEffect(() => {
    if (recipes.length <= 0) {
      updateRecipes();
    }
  }, [recipes]);

  const listRecipes = () => {
    return recipes.map((recipe, index) => (
      <Table.Body.Row key={index}>
        <Table.Body.Item>{recipe.facility.name}</Table.Body.Item>
        <Table.Body.Item>{recipe.facility.level}</Table.Body.Item>
        <Table.Body.Item>
          <Process
            input={recipe.input}
            time={recipe.time}
            output={recipe.output}
          />
        </Table.Body.Item>
        <Table.Body.Item>
          <Table.Price>{recipe.profit}</Table.Price>
        </Table.Body.Item>
      </Table.Body.Row>
    ));
  };

  return (
    <>
      <div>
        <Table>
          <Table.Head>
            <Table.Head.Item>Facility</Table.Head.Item>
            <Table.Head.Item>Level</Table.Head.Item>
            <Table.Head.Item>Process</Table.Head.Item>
            <Table.Head.Item>Profit</Table.Head.Item>
          </Table.Head>
          <Table.Body>{recipes.length > 0 && listRecipes()}</Table.Body>
        </Table>
      </div>
    </>
  );
};

export default Content;
