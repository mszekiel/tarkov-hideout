import * as React from "react";
import styled from "styled-components";

interface ButtonProps {
  active?: boolean;
}

const Button = styled.div<ButtonProps>`
  font-size: 14pt;
  transition: 0.2s;
  user-select: none;
  padding: 4px 10px;
  display: inline-block;
  font-family: ${props => props.theme.font};
  color: ${props => (props.active ? "black" : props.theme.colors.primary)};
  background-color: ${props =>
    props.active ? props.theme.colors.primary : "transparent"};
  border: 1px solid ${props => props.theme.colors.primary};
  pointer-events: ${props => (props.active ? "none" : "all")};

  &:hover {
    opacity: 0.75;
    box-shadow: inset 0 0 2px 0 ${props => props.theme.colors.primary};
  }

  &:active {
    box-shadow: none;
    color: black;
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.85;
  }
`;

export default Button;
