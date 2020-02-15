import * as React from "react";
import { debounce } from "debounce";
import styled from "styled-components";
import InfiniteScroll from "react-infinite-scroller";
import { useInView } from "react-intersection-observer";

import { Table } from "../../components/Table";
import { Recipe } from "../../types/Recipe";
import { Process } from "../../components/Process";
import { getRecipes } from "../../services/hideout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TriggerBox = styled.div`
  padding: 20px 40px;
  margin: 30px;
  font-size: 16pt;
  background-color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: ${props => props.theme.font};
`;

const Trigger = () => <TriggerBox>Load more</TriggerBox>;

const ContentTable = () => {
  const [recipes, setRecipes] = React.useState<JSX.Element[]>([]);
  const [ref, inView] = useInView({ threshold: 0 });

  const updateRecipes = (start = recipes.length) => {
    debounce(
      () => {
        getRecipes(start).then(result => {
          setRecipes(recipes.concat(renderRecipes(result)));
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
    if (inView) {
      updateRecipes();
    }
  }, [recipes, inView]);

  const renderRecipes = (recipeList: Recipe[]) => {
    return recipeList.map((recipe, index) => (
      <Table.Body.Row key={recipe.profit}>
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

  const getPlaceholders = () => {
    return [1, 2, 3, 4].map(i => (
      <Table.Body.Row key={i}>
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
      </Table.Body.Row>
    ));
  };

  return (
    <Container>
      <InfiniteScroll loadMore={updateRecipes}>
        <Table>
          <Table.Head>
            <Table.Head.Item>Facility</Table.Head.Item>
            <Table.Head.Item>Level</Table.Head.Item>
            <Table.Head.Item>Process</Table.Head.Item>
            <Table.Head.Item>Profit</Table.Head.Item>
          </Table.Head>
          <Table.Body>
            {recipes.length > 0 ? recipes : getPlaceholders()}
          </Table.Body>
        </Table>
      </InfiniteScroll>
      <div ref={ref}>{recipes.length > 0 && <Trigger />}</div>
    </Container>
  );
};

export default ContentTable;
