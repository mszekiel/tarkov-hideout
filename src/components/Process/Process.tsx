import * as React from "react";
import Input from "./components/Input";
import Item from "./components/Item";
import styled from "styled-components";
import Time from "./components/Time";
import Output from "./components/Output";

const ProcessContainer = styled.div`
  display: inline-block;
  align-items: center;
  padding: 10px;
  position: relative;

  /* &:before {
    content: "";
    position: absolute;
    transform: translate(-25%, -25%);
    width: 150%;
    height: 150%;
    background-image: radial-gradient(
      ellipse closest-side,
      black,
      rgba(0, 0, 0, 0)
    );
  } */
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export interface ProcessProps {}

class Process extends React.Component<ProcessProps> {
  static Input: typeof Input;
  static Item: typeof Item;
  static Time: typeof Time;
  static Output: typeof Output;

  constructor(props: ProcessProps) {
    super(props);
  }

  render() {
    return (
      <ProcessContainer>
        <FlexContainer>{this.props.children}</FlexContainer>
      </ProcessContainer>
    );
  }
}

export default Process;
