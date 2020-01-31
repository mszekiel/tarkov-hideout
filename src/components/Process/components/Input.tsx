import * as React from "react";
import styled from "styled-components";
import Icon from "./Item";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 5px;
`;

export interface InputProps {
  children: typeof Icon[];
}

const Input: React.FC = ({ children }) => {
  return <InputContainer>{children}</InputContainer>;
};

export default Input;
