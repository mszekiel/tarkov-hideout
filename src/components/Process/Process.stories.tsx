import * as React from "react";
import Process from "./index";
import { storiesOf } from "@storybook/react";
import ItemDate from "../../utils/itemDate";

storiesOf("Process", module).add("With input", () => (
  <Process
    input={[{ name: "mosin", amount: 1 }]}
    time={new ItemDate(0, 23, 0)}
    output={[{ name: "key", amount: 2 }]}
  />
));
