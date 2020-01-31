import * as React from "react";
import Process from "./index";
import { storiesOf } from "@storybook/react";

storiesOf("Process", module)
  .add("Empty", () => <Process />)
  .add("With input", () => (
    <Process>
      <Process.Input>
        <Process.Item icon="fuel conditioner" amount={4} />
        <Process.Item icon="red card" amount={1} />
        <Process.Item icon="scav" amount={99} />
      </Process.Input>
      <Process.Time completion="02:00" />
      <Process.Output>
        <Process.Item icon="fuel" amount={102} />
      </Process.Output>
    </Process>
  ));
