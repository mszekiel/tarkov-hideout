import * as React from "react";
import styled from "styled-components";
import Arrow from "../../Arrow/Arrow";

export interface ArrowProps {
  completion?: string;
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

const Time: React.FC<ArrowProps> = ({ completion }) => {
  return (
    <TimeContainer>
      <Arrow />
      <CompletionTime>{completion}</CompletionTime>
    </TimeContainer>
  );
};
export default Time;
