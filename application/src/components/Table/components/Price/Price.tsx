import * as React from "react";
import styled from "styled-components";

export interface PriceProps {
  children: number;
}

const Price = styled.span<PriceProps>`
  letter-spacing: 1px;
  font-weight: bold;
  color: ${props => (props.children > 0 ? "darkgreen" : "darkred")};
  text-shadow: 0 0 7px;

  &:after {
    padding: 0 6px;
    content: "₽";
  }
`;

export default Price;
