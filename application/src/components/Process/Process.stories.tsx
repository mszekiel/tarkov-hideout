import * as React from "react";
import Process from "./index";
import { storiesOf } from "@storybook/react";
import { ItemDate } from "../../types/ItemDate";

storiesOf("Process", module)
  .add("One to one", () => (
    <Process
      input={[{ name: "mosin", amount: 1, price: 0, icon: "" }]}
      time={new ItemDate([0, 23, 0])}
      output={[{ name: "key", amount: 2, price: 0, icon: "" }]}
    />
  ))
  .add("Two to Two", () => (
    <Process
      input={[
        { name: "lab card", amount: 1, price: 0, icon: "" },
        { name: "cable", amount: 3, price: 0, icon: "" }
      ]}
      time={new ItemDate([0, 45, 0])}
      output={[
        { name: "adar", amount: 2, price: 0, icon: "" },
        { name: "toilet", amount: 3, price: 0, icon: "" }
      ]}
    />
  ));
