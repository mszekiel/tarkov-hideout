import * as React from "react";
import styled from "styled-components";
import ContentTable from "./ContentTable";

const Hero = styled.p`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.colors.primary};
  padding: 10px 14%;
  text-align: center;
`;

const Content = () => {
  return (
    <div>
      <Hero>
        Hideout profit calculator is based on <i>Tarkov Market</i> application!
      </Hero>
      <ContentTable />
    </div>
  );
};

export default Content;
