import * as React from "react";
import styled, { keyframes } from "styled-components";
import Item from "./Item";
import Row from "./Row";

const shine = keyframes`
0% { background-position: -500px;}
40%, 100% {background-position: 800px;}
`;

const Placeholder = styled(Item)`
  position: relative;
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
    animation-delay: 0.5s;
  }
  
  &:nth-child(5) {
    width: 90px;
    animation-delay: 0.6s;
  }

  ${Row}:nth-child(2) > & {
    opacity: 0.9;
  }

  ${Row}:nth-child(3) > & {
    opacity: 0.7;
  }

   ${Row}:nth-child(4) > & {
    opacity: 0.5;
   }
   
  /* ${Row}:nth-child(4) > & {
    opacity: 1;
    &:after {
      content: "";
      margin: -2px 0;
      background: red;
      display: block;
      height: 80px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translate(0, 100%);
    }
  } */
`;

export default Placeholder;
