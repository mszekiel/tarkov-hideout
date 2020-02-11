import * as React from "react";
import styled from "styled-components";
import Head from "./components/Head/Head";
import Body from "./components/Body/Body";
import Price from "./components/Price/Price";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 50px 0;
  justify-content: center;
`;

const Main = styled.table`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.colors.primary};
`;

class Table extends React.Component<{}> {
  static Head: typeof Head;
  static Body: typeof Body;
  static Price: typeof Price;

  constructor(props: {}) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Main>{this.props.children}</Main>
      </Container>
    );
  }
}

export default Table;
