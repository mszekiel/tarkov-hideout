import * as React from "react";
import Icon from "../../Icon/Icon";
import styled from "styled-components";
import { TarkovItem, query } from "../../../services/tarkovMarket";
import Loader from "../../Loader/Loader";

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
  amount: number;
}

const Item: React.FC<ItemProps> = ({ name, amount }) => {
  const [item, setItem] = React.useState<TarkovItem>();

  React.useEffect(() => {
    if (!item) {
      query(name).then(items => {
        setItem(items[0]);
      });
    }
  }, [item]);

  return (
    <ItemContainer>
      <IconContainer>
        <Icon name={item?.name} src={item?.icon} />
      </IconContainer>
      <Amount>{amount}</Amount>
    </ItemContainer>
  );
};

export default Item;
