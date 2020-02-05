import * as React from "react";
import styled from "styled-components";
import Arrow from "../../Arrow/Arrow";
import ItemDate from "../../../utils/itemDate";

export interface TimeProps {
  time: ItemDate;
}

const TimeContainer = styled.div`
  padding: 0 20px;
`;

const CompletionTime = styled.div`
  font-family: ${props => props.theme.font};
  text-align: center;
  color: ${props => props.theme.colors.primary};
  text-shadow: 0 0 2px ${props => props.theme.colors.primary};
`;


const Time: React.FC<TimeProps> = ({ time }) => {
  return (
    <TimeContainer>
      <Arrow />
      <CompletionTime>{time.getItemString()}</CompletionTime>
    </TimeContainer>
  );
};
export default Time;
