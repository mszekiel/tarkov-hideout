import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background}
}

html {
    padding: 0;
    margin: 0;
    height: 100%;
    width: 100%;
}

#app {
    height: 100%;
}

a {
    text-decoration: underline;
    color: inherit;
}

@font-face {
    font-family: 'Bender'; 
    src: url("./resources/fonts/Bender.otf");
    font-weight: 400;
    font-style: normal;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-Italic.otf");
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-Light.otf");
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-LightItalic.otf");
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-Bold.otf");
    font-weight: 700;
    font-style: normal;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-BoldItalic.otf");
    font-weight: 700;
    font-style: italic;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-Black.otf");
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Bender';
    src: url("../resources/fonts/Bender-BlackItalic.otf");
    font-weight: 900;
    font-style: italic;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(110,110,110,0.3);
}

::-webkit-scrollbar-thumb {
  background: ${props => props.theme.colors.secondary};
}

::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.colors.primary};
}
`;

export default GlobalStyle;
