import * as React from "react";
import styled from "styled-components";
import ContentTable from "./ContentTable";

const Hero = styled.p`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.colors.primary};
  padding: 10px 19%;
  text-align: center;
`;

const Content = () => {
  return (
    <div>
      <Hero>
        <b>Hideout profit calculator</b> aggregates data provided by{" "}
        <i>Tarkov Market</i> created by{" "}
        <a href="https://www.reddit.com/user/ggDiam/">u/ggDiam</a>. Kudos to him
        for sharing API interface making this calculator possible! Profit
        calculator takes last lowest price of given items and calculates
        possible profit of crafting and then selling item.
      </Hero>
      <ContentTable />
    </div>
  );
};

export default Content;
