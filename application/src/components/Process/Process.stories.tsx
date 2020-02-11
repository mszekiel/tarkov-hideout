import * as React from "react";
import Process from "./index";
import { storiesOf } from "@storybook/react";
import ItemDate from "../../utils/itemDate";

storiesOf("Process", module)
  .add("One to one", () => (
    <Process
      input={[{ name: "mosin", amount: 1 }]}
      time={new ItemDate(0, 23, 0)}
      output={[{ name: "key", amount: 2 }]}
    />
  ))
  .add("Two to Two", () => (
    <Process
      input={[
        { name: "lab card", amount: 1 },
        { name: "cable", amount: 3 }
      ]}
      time={new ItemDate(0, 45, 0)}
      output={[
        { name: "adar", amount: 2 },
        { name: "toilet", amount: 3 }
      ]}
    />
  ));
 