import * as React from "react";
import styled from "styled-components";
import Item from "./Item";

export interface HeadProps {}

class Head extends React.Component<HeadProps> {
  static Item: typeof Item;

  constructor(props: HeadProps) {
    super(props);
  }

  render() {
    return (
      <thead>
        <tr>{this.props.children}</tr>
      </thead>
    );
  }
}

export default Head;
