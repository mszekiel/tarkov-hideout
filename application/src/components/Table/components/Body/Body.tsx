import * as React from "react";
import Item from "./Item";
import Row from "./Row";
import Placeholder from "./Placeholder";

class Body extends React.Component {
  static Row: typeof Row;
  static Item: typeof Item;
  static Placeholder: typeof Placeholder;

  render() {
    return <tbody>{this.props.children}</tbody>;
  }
}

export default Body;
