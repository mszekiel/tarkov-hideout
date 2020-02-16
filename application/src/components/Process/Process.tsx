import * as React from "react";
import Input from "./components/Input";
import Item from "./components/Item";
import styled from "styled-components";
import Time from "./components/Time";
import { ItemDate } from "../../types/ItemDate";
import { Resource } from "../../types/Resource";
import { ErrorInfo } from "./components/ErrorInfo";

export const ProcessContainer = styled.div`
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
  input: Resource[];
  time: ItemDate;
  output: Resource[];
}

class Process extends React.Component<ProcessProps> {
  static Input: typeof Input;
  static Item: typeof Item;
  static Time: typeof Time;
  static Output: typeof Input;

  constructor(props: ProcessProps) {
    super(props);
  }

  checkFailed(input: Resource[], output: Resource[]) {
    const items = [...input, ...output];
    return !!items.filter(item => !item.price).length;
  }

  render() {
    const { input, time, output } = this.props;
    const isFailed = this.checkFailed(input, output);

    return (
      <ProcessContainer>
        {isFailed ? <ErrorInfo /> : ""}
        <FlexContainer>
          {input.map(item => (
            <Item key={item.name || "no_key" + Math.random()} {...item} />
          ))}
          <Time key={"item_time"} time={time} />
          {output.map(item => (
            <Item key={item.name || "no_key" + Math.random()} {...item} />
          ))}
        </FlexContainer>
      </ProcessContainer>
    );
  }
}

export default Process;
