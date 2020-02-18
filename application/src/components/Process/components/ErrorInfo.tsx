import * as React from "react";
import styled, { keyframes } from "styled-components";


const TopLabel = styled.span`
  font-weight: 700;
  font-size: 16pt;
  display: inline-block;
  padding: 5px 10px;
  background-color: rgb(140, 0, 0);
  box-shadow: 0 0 10px 0 rgb(140, 0, 0);
`;

const BottomLabel = styled.div`
  color: white;
  margin: 10px 0;
  padding: 3px 10px;
  width: 350px;
  text-shadow: 0 0 3px black, 0 0 3px black, 0 0 5px black, 0 0 5px black;
  background-image: repeating-linear-gradient(
    45deg,
    rgba(180, 180, 0, 0.7),
    rgba(180, 180, 0, 0.7) 10px,
    rgba(0, 0, 0, 0.7) 10px,
    rgba(0, 0, 0, 0.7) 20px
  );
  box-shadow: 0 0 10px 0 rgb(0, 0, 0);
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  color: black;
  transition: 0.3s;
  &:hover {
    opacity: 0.23;
  }
`;

const InlineLink = styled.a`
  text-decoration: underline;
  color: white;
`;

export const ErrorInfo = () => (
  <Container>
    <TopLabel>Error!</TopLabel>
    <BottomLabel>
      Some items price are not being tracked! Support data provider to make it
      possible!
      <br />
      <InlineLink href="https://tarkov-market.com/en/" target="_blank">
        tarkov-market.com
      </InlineLink>
    </BottomLabel>
  </Container>
);
