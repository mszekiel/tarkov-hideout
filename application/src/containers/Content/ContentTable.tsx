import * as React from "react";
import { debounce } from "debounce";
import styled, { keyframes } from "styled-components";
import InfiniteScroll from "react-infinite-scroller";

import { Table } from "../../components/Table";
import { Recipe } from "../../types/Recipe";
import { Process } from "../../components/Process";
import { getRecipes } from "../../services/hideout";

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

type SortType = "asc" | "desc" | "none";

const sortIcon = {
  asc: "⯅",
  desc: "⯆",
  none: "⯇"
};

const ContentTable = () => {
  const [recipes, setRecipes] = React.useState<Recipe[]>([]);
  const [hasMore, setHasMore] = React.useState(true);
  const [sortType, setStortType] = React.useState<SortType>("desc");

  const updateRecipes = () => {
    debounce(
      () => {
        getRecipes(recipes.length).then(result => {
          setRecipes(sortRecipes(recipes.concat(result)));
          if (result.length <= 0) setHasMore(false);
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
    setRecipes(sortRecipes(recipes));
  }, [recipes, sortType]);

  const sortRecipes = (recipeElements: Recipe[]) => {
    switch (sortType) {
      case "asc":
        recipeElements.sort((a, b) => a.profit - b.profit);
        return recipeElements;
      case "desc":
        recipeElements.sort((a, b) => b.profit - a.profit);
        return recipeElements;
      default:
        return recipeElements;
    }
  };

  const renderRecipes = (recipeList: Recipe[]) => {
    return recipeList.map(recipe => <Table.Body.Recipe {...recipe} />);
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

  const handleSortChange = () => {
    switch (sortType) {
      case "asc":
        setStortType("desc");
        break;
      case "desc":
        setStortType("asc");
        break;
      default:
        setStortType("asc");
        break;
    }
  };

  const sorter = () => {
    return <span onClick={handleSortChange}>{sortIcon[sortType]}</span>;
  };

  return (
    <Container key="con">
      <InfiniteScroll
        loadMore={updateRecipes}
        hasMore={hasMore}
        loader={<Trigger key="infinite_loader" />}
        key="asdasd
        "
      >
        <Table key="table">
          <Table.Head key="table_head">
            <Table.Head.Item>Facility</Table.Head.Item>
            <Table.Head.Item>Level</Table.Head.Item>
            <Table.Head.Item>Process</Table.Head.Item>
            <Table.Head.Item>Profit {sorter()}</Table.Head.Item>
            <Table.Head.Item>Profit / H</Table.Head.Item>
          </Table.Head>
          <Table.Body key="table_body">
            {recipes.length > 0 ? renderRecipes(recipes) : getPlaceholders()}
          </Table.Body>
        </Table>
      </InfiniteScroll>
    </Container>
  );
};

export default ContentTable;
