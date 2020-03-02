import * as React from "react";
import { debounce } from "debounce";
import styled, { keyframes } from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import { Table } from "../../../components/Table";
import { Recipe } from "../../../types/Recipe";
import { Process } from "../../../components/Process";
import { getRecipes } from "../../../services/hideout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const loaderBreath = keyframes`
  0% { opacity: 0.5;}
  100% { opacity: 1;}
`;

const Loader = styled.div`
  display: inline-block;
  padding: 20px 40px;
  margin: 30px;
  font-size: 16pt;
  background-color: ${props => props.theme.colors.primary};
  font-weight: bold;
  font-family: ${props => props.theme.font};
  animation: ${loaderBreath} 0.2s infinite alternate;
  user-select: none;
  cursor: progress;
`;

const Trigger = () => (
  <LoaderContainer>
    <Loader>Loading more...</Loader>
  </LoaderContainer>
);

type sortTypeProfit = "asc" | "desc";
type sortTypeHour = "asc" | "desc";

const sortIcon = {
  asc: "⯅",
  desc: "⯆"
};

const ContentTable = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [sortTypeProfit, setSortTypeProfit] = React.useState<sortTypeProfit>("asc");
  const [sortTypeHour, setSortTypeHour] = React.useState<sortTypeHour>("asc");

  const updateRecipes = () =>
    getRecipes(recipes.length).then(result => {
      setRecipes([].concat([...recipes].concat(result)));
      if (result.length <= 0) setHasMore(false);
    });

  React.useEffect(() => {
    updateRecipes();
  }, []);

  React.useEffect(() => {
    setRecipes(sortRecipesByProfit(recipes));
  }, [sortTypeProfit]);

  React.useEffect(() => {
    setRecipes(sortRecipesByHour(recipes));
  }, [sortTypeHour]);

  const sortRecipesByProfit = (recipeElements: Recipe[]) => {
    switch (sortTypeProfit) {
      case "asc":
        recipeElements.sort((a, b) => b.profit - a.profit);
        return recipeElements;
      case "desc":
        recipeElements.sort((a, b) => a.profit - b.profit);
        return recipeElements;
    }
  };

  const sortRecipesByHour = (recipeElements: Recipe[]) => {
    switch (sortTypeHour) {
      case "asc":
        recipeElements.sort((a, b) => Math.round(b.time.getHourFactor() * b.profit) - Math.round(a.time.getHourFactor() * a.profit));
        return recipeElements;
      case "desc":
        recipeElements.sort((a, b) => Math.round(a.time.getHourFactor() * a.profit) - Math.round(b.time.getHourFactor() * b.profit));
        return recipeElements;
    }
  };

  const renderRecipes = (recipeList: Recipe[]) => {
    if (recipeList.length > 0) {
      const rcp = recipeList.map(recipe => <Table.Body.Recipe {...recipe} />);
      return rcp;
    } else {
      return getPlaceholders();
    }
  };

  const getPlaceholders = () => {
    return [1, 2, 3, 4].map(i => (
      <Table.Body.Row key={i}>
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
        <Table.Body.Placeholder />
      </Table.Body.Row>
    ));
  };

  const handleSortChangeProfit = () => {
    switch (sortTypeProfit) {
      case "asc":
        setSortTypeProfit("desc");
        break;
      case "desc":
        setSortTypeProfit("asc");
        break;
    }
  };

  const handleSortChangeHour = () => {
    switch (sortTypeHour) {
      case "asc":
        setSortTypeHour("desc");
        break;
      case "desc":
        setSortTypeHour("asc");
        break;
    }
  };

  const sorterByProfit = () => {
    return <span onClick={handleSortChangeProfit}>{sortIcon[sortTypeProfit]}</span>;
  };

  const sorterByHour = () => {
    return <span onClick={handleSortChangeHour}>{sortIcon[sortTypeHour]}</span>;
  };

  return (
    <Container key="con">
      {/* <InfiniteScroll
        loadMore={updateRecipes}
        hasMore={hasMore}
        loader={<Trigger key="infinite_loader" />}
        key="infinite_table"
      > */}
      <Table key="table">
        <Table.Head key="table_head">
          <Table.Head.Item>Facility</Table.Head.Item>
          <Table.Head.Item>Level</Table.Head.Item>
          <Table.Head.Item>Process</Table.Head.Item>
          <Table.Head.Item>Profit {sorterByProfit()}</Table.Head.Item>
          <Table.Head.Item>Profit / H {sorterByHour()}</Table.Head.Item>
        </Table.Head>
        <Table.Body key="table_body">{...renderRecipes(recipes)}</Table.Body>
      </Table>
      {/* </InfiniteScroll> */}
    </Container>
  );
};

export default ContentTable;
