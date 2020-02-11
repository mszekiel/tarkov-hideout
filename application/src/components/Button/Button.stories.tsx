import * as React from "react";
import Button from "./Button";
import { storiesOf } from "@storybook/react";
import Icon from "../Icon/Icon";

storiesOf("Button", module)
  .add("With text", () => <Button>Hello</Button>)
  .add("Active with text", () => <Button active>I'm super button!</Button>)
  .add("With emoji", () => <Button>😅😅</Button>)
