import * as React from "react";
import { storiesOf } from "@storybook/react";
import Arrow from "./Arrow";

storiesOf("Arrow", module)
  .add("Default", () => <Arrow />)
  .add("Right", () => <Arrow direction="right" />)
  .add("Left", () => <Arrow direction="left" />)
  .add("Up", () => <Arrow direction="up" />)
  .add("Down", () => <Arrow direction="down" />);
