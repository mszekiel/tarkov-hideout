import * as React from "react";
import styled, { keyframes } from "styled-components";
import Item from "./Item";

const shine = keyframes`
0% { background-position: -500px;}
40%, 100% {background-position: 800px;}
`;

const Placeholder = styled(Item)`
  height: 80px;
  background-size: 500px;
  background-repeat: no-repeat;
  background-color: rgba(229, 229, 229, 0.1);
  background-image: linear-gradient(
    90deg,
    rgba(229, 229, 229, 0) 0%,
    rgba(229, 229, 229, 0.1) 40%,
    rgba(229, 229, 229, 0) 100%
  );
  background-position: 400px;
  animation: ${shine} 1s ease-out infinite;

  &:nth-child(1) {
    width: 135px;
    animation-delay: 0.2s;
  }
  &:nth-child(2) {
    width: 45px;
    animation-delay: 0.3s;
  }
  &:nth-child(3) {
    width: 450px;
    animation-delay: 0.4s;
  }
  &:nth-child(4) {
    width: 85px;
    animation-delay: 0.6s;
  }
`;

export default Placeholder;
