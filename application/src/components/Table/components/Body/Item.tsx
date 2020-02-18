import * as React from "react";
import styled from "styled-components";

const Item = styled.td`
  background: rgba(255, 255, 255, 0.05);
  text-align: center;
  padding: 10px 20px;

  &:hover {
    /* box-shadow: inset 0 0 10px 0 rgba(255, 255, 255, 0.05); */
  }
`;

export default Item;
