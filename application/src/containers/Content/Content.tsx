import * as React from "react";
import { Recipe } from "../../types/Recipe";
import { getRecipes } from "../../services/hideout";
import Table from "../../components/Table";
import Process from "../../components/Process";

const Content = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);

  React.useEffect(() => {
    if (recipes.length <= 0) {
      getRecipes().then(result => {
        setRecipes(result);
      });
    }
  }, [recipes]);

  const listRecipes = () => {
    return recipes.map((recipe, index) => (
      <Table.Body.Row key={index}>
        <Table.Body.Item>{recipe.facility}</Table.Body.Item>
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

//          <Table>
//           <Table.Head>
//             <Table.Head.Item>Facility</Table.Head.Item>
//             <Table.Head.Item>Crafting</Table.Head.Item>
//             <Table.Head.Item>Profit</Table.Head.Item>
//             <Table.Head.Item>Materials cost</Table.Head.Item>
//             <Table.Head.Item>Products cost</Table.Head.Item>
//           </Table.Head>
//           <Table.Body>
//             <Table.Body.Row>
//               <Table.Body.Item>Test</Table.Body.Item>
//               <Table.Body.Item>test</Table.Body.Item>
//               <Table.Body.Item>
//                 <Table.Price>{-11.123}</Table.Price>
//               </Table.Body.Item>
//               <Table.Body.Item>test</Table.Body.Item>
//             </Table.Body.Row>
//           </Table.Body>
//         </Table>
