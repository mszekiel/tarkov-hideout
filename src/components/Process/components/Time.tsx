import * as React from "react";
import styled from "styled-components";
import Arrow from "../../Arrow/Arrow";

export interface ArrowProps {
  time?: Date;
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

const getTimeString = (time: Date) => {
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const parseValue = (value: number) => ("0" + value).slice(-2);

  return [
    hours ? `${parseValue(hours)}:` : "",
    minutes ? `${parseValue(minutes)}:` : "",
    parseValue(seconds)
  ].join("");
};

const Time: React.FC<ArrowProps> = ({ time }) => {
  return (
    <TimeContainer>
      <Arrow />
      <CompletionTime>{getTimeString(time)}</CompletionTime>
    </TimeContainer>
  );
};
export default Time;
