import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/globalStyle";
import Header from "./Header/Header";
import Table from "./Table/Table";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Container>
        <Header />
        <Table />
      </Container>
    </ThemeProvider>
  );
};

export default App;
