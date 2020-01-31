import * as React from "react";
import { storiesOf } from "@storybook/react";
import Icon from "./Icon";

storiesOf("Icon", module)
  .add("Empty", () => <Icon />)
  .add("With Key", () => <Icon icon="West wing room 203 key" />)
  .add("With Mosin", () => <Icon icon="Infantry Mosin" />);
