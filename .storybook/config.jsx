import * as React from "react";
import GlobalStyle from "../src/styles/globalStyle";
import mainTheme from "../src/styles/mainTheme";
import { ThemeProvider } from "styled-components";
import { configure, addDecorator } from "@storybook/react";

const req = require.context("../src/", true, /\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = storyFn => {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  );
};

addDecorator(withGlobal);
configure(loadStories, module);
