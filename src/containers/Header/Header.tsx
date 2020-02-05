import * as React from "react";
import styled from "styled-components";

const Main = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
  box-shadow: 0px 1px 5px 0px ${props => props.theme.colors.secondary};
`;

const Container = styled.div`
  background-color: black;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 0 100px;
`;

const Logo = styled.div`
  height: 60px;
  margin: 0 20px;

  & img {
    height: 100%;
  }
  transition: 0.2s;

  &:hover {
    filter: brightness(50%);
  }
`;

const Title = styled.a`
  display: flex;
  flex-direction: column-reverse;
  margin: 0 20px;
  font-family: ${props => props.theme.font};
  font-size: 32px;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  padding: 5px 0;
  transition: 0.2s;

  &:hover {
    filter: brightness(50%);
  }
`;

const Header = () => {
  return (
    <Main>
      <Container>
        <Logo>
          <img src="./resources/images/tarkov_logo.png" />
        </Logo>
        <Title href="/">Hideout Profit Calculator</Title>
      </Container>
    </Main>
  );
};

export default Header;
