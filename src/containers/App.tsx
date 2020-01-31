import * as React from "react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import GlobalStyle from "../styles/globalStyle";
import Button from "../components/Button/Button";

const App = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Button>Hello!</Button>
    </ThemeProvider>
  );
};

export default App;
