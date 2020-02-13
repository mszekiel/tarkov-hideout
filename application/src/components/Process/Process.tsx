import * as React from "react";
import Input from "./components/Input";
import Item from "./components/Item";
import styled from "styled-components";
import Time from "./components/Time";
import ItemDate from "../../types/ItemDate";
import { ItemData } from "../../types/Recipe";

const ProcessContainer = styled.div`
  display: inline-block;
  align-items: center;
  padding: 10px;
  position: relative;
  user-select: none;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

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
          <Time key={'asd'} time={time} />
          {output.map(item => (
            <Item key={item.name} {...item} />
          ))}
        </FlexContainer>
      </ProcessContainer>
    );
  }
}

export default Process;
