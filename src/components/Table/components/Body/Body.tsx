import * as React from "react";
import Item from "./Item";
import Row from "./Row";

class Body extends React.Component {
  static Row: typeof Row;
  static Item: typeof Item;

  render() {
    return <tbody>{this.props.children}</tbody>;
  }
}

export default Body;
