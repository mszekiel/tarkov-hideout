import * as React from "react";
import Input from "../index";

const Output: React.FC = ({ children }) => {
  return <Input>{children}</Input>;
};

export default Output;
