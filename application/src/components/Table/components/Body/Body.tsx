import * as React from "react";
import Item from "./Item";
import Row from "./Row";
import Placeholder from "./Placeholder";
import { Recipe } from "./Recipe";

class Body extends React.Component {
  static Row: typeof Row;
  static Item: typeof Item;
  static Placeholder: typeof Placeholder;
  static Recipe: typeof Recipe;

  render() {
    return <tbody>{this.props.children}</tbody>;
  }
}

export default Body;
