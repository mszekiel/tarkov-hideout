import * as React from "react";
import styled, { keyframes } from "styled-components";

const shadowBreath = keyframes`
  0% {opacity: 1;}
  100% {opacity: 0.5;}
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  color: ${props => props.theme.colors.primary};
  font-family: ${props => props.theme.font};
  background-color: black;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-width: 1px 0 0 1px;
`;

const Shadow = styled.div`
  box-shadow: 5px 5px 20px 10px ${props => props.theme.colors.secondary};
  animation: ${shadowBreath} 0.8s ease-in-out infinite alternate;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px 10px;
  position: relative;
  height: 100%;
  width: 100%;
`;

const Description = styled.span`
font-weight: 600;
  color: ${props => props.theme.colors.secondary};
  padding: 2px 0;
`;

const Link = styled.a`
  font-weight: bold;
  font-size: 16pt;
  padding: 2px 0;
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

export const MarketInfo = () => (
  <Container>
    <TextBox>
      <Description>Item data provided by:</Description>
      <Link href="https://tarkov-market.com/en/" target="_blank">
        tarkov-market.com
      </Link>
      <Shadow />
    </TextBox>
  </Container>
);
