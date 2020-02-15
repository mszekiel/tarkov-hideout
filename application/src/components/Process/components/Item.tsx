import * as React from "react";
import Icon from "../../Icon/Icon";
import styled from "styled-components";

const IconContainer = styled.div`
  border: 1px solid black;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${IconContainer} {
    border: 1px solid black;
  }

  &:not(:first-child) ${IconContainer} {
    margin-left: -1px;
  }
`;

const Amount = styled.div`
  text-align: center;
  font-family: ${props => props.theme.font};
  font-size: 12pt;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 2px ${props => props.theme.colors.primary};
`;

export interface ItemProps {
  name: string;
  icon: string;
  amount: number;
  price: number;
}

const Item: React.FC<ItemProps> = ({ name, amount, icon, price }) => {
  return (
    <ItemContainer>
      <IconContainer>
        <Icon name={price ? `${name} - ${price}₽` : "Can't get item info 😔"} src={icon} />
      </IconContainer>
      <Amount>{amount}</Amount>
    </ItemContainer>
  );
};

export default Item;
