import * as React from "react";
import Input from "./components/Input";
import Item from "./components/Item";
import styled from "styled-components";
import Time from "./components/Time";
import ItemDate from "../../utils/itemDate";
// import Output from "./components/Output";

const ProcessContainer = styled.div`
  display: inline-block;
  align-items: center;
  padding: 10px;
  position: relative;
  user-select: none;

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

interface ItemData {
  name: string;
  amount: number;
}

export interface ProcessProps {
  input: ItemData[];
  time: ItemDate;
  output: ItemData[];
}

class Process extends React.Component<ProcessProps> {
  static Input: typeof Input;
  static Item: typeof Item;
  static Time: typeof Time;
  static Output: typeof Input;

  constructor(props: ProcessProps) {
    super(props);
  }

  render() {
    const { input, time, output } = this.props;
    return (
      <ProcessContainer>
        <FlexContainer>
          {input.map(item => (
            <Item key={item.name} {...item} />
          ))}
          <Time time={time} />
          {output.map(item => (
            <Item key={item.name} {...item} />
          ))}
        </FlexContainer>
      </ProcessContainer>
    );
  }
}

export default Process;
