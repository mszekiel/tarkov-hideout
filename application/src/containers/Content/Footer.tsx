import * as React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  width: 100%;
  height: 120px;
  margin-top: auto;
  border: 1px solid gray;
  border-width: 1px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: gray;
  font-family: ${props => props.theme.font};
  padding: 50px 0;
`;

const Contributors = styled.span`
  text-decoration: underline;
  position: relative;

  &:hover {
    &:after {
      position: absolute;
      right: -100px;
      border: 1px solid black;
      content: "Renchon";
    }
  }
`;

export const Footer = () => (
  <Container>
    <p>© 2020 Tarkov Hideout Calculator</p>
    <a href="https://www.reddit.com/user/Orbital_Butcher">Contact</a>
    <p>
      Thanks to <Contributors>co-contributors</Contributors>!
    </p>
  </Container>
);
