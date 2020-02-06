import styled from "styled-components";

export interface PriceProps {
  children: number;
}

const Price = styled.span<PriceProps>`
  letter-spacing: 1px;
  font-weight: bold;
  color: ${props => (props.children > 0 ? "darkgreen" : "darkred")};
  text-shadow: 0 0 7px;
`;

export default Price;
