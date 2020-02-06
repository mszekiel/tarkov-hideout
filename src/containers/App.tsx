import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/globalStyle";
import Header from "./Header/Header";
import Table from "../components/Table";

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
        <Table>
          <Table.Head>
            <Table.Head.Item>Facility</Table.Head.Item>
            <Table.Head.Item>Crafting</Table.Head.Item>
            <Table.Head.Item>Profit</Table.Head.Item>
            <Table.Head.Item>Materials cost</Table.Head.Item>
            <Table.Head.Item>Products cost</Table.Head.Item>
          </Table.Head>
          <Table.Body>
            <Table.Body.Row>
              <Table.Body.Item>Test</Table.Body.Item>
              <Table.Body.Item>test</Table.Body.Item>
              <Table.Body.Item>
                <Table.Price>{-11.123}</Table.Price>
              </Table.Body.Item>
              <Table.Body.Item>test</Table.Body.Item>
            </Table.Body.Row>
          </Table.Body>
        </Table>
      </Container>
    </ThemeProvider>
  );
};

export default App;
