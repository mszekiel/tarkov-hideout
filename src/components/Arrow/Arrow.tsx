import * as React from "react";
import styled from "styled-components";

interface ArrowProps {
  direction?: "left" | "right" | "up" | "down";
  color?: string;
}

const Arrow = styled.div<ArrowProps>`
  border: solid ${props => props.color};
  border-width: 0 7px 7px 0;
  display: inline-block;
  padding: 10px;
  margin: 10px;
  transform: rotate(
    ${props => {
      switch (props.direction) {
        case "right":
          return "-45deg";
        case "left":
          return "135deg";
        case "up":
          return "-135deg";
        case "down":
          return "45deg";
      }
    }}
  );
`;

Arrow.defaultProps = {
  direction: "right",
  color: "gray"
};

export default Arrow;
