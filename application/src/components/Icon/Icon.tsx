import * as React from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";

interface IconProps {
  src: string;
  name?: string;
}

interface ImageContainerProps {
  name: string;
}

const Container = styled.div`
  height: 62px;
  width: 62px;
  background-color: rgb(50, 50, 50);
  transition: 0.2s ease-in-out;
  /* box-shadow: inset 0 0 0 1px #4e4c56, inset 0 0 3px 0 #020202; */
  position: relative;

  &:hover {
    z-index: 5;
    filter: brightness(85%);
    transition: 0.2s ease-in-out;
  }

  &:active {
    filter: brightness(55%);
    transition: 0.1s ease-in-out;
  }
`;

const ImageContainer = styled.div<ImageContainerProps>`
  & img {
    height:  100%;
    width:  100%;
  }

  &:hover {
    &:before {
      position: absolute;
      left: 50%;
      top: 100%;
      transform: translate(-50%, 120%);
      content: "${props => props.name.replace(/"/g, '\\"')}";
      font-size: 10pt;
      background-color: black;
      color: ${props => props.theme.colors.primary};
      border: 1px solid ${props => props.theme.colors.primary};
      font-family: ${props => props.theme.font};
      white-space: nowrap;
      padding: 2px 5px;
    }
  }
`;

const Cross = styled.div`
  &:before,
  &:after {
    position: absolute;
    content: " ";
    left: 27.5px;
    top: 0;
    height: 60px;
    width: 8px;
    background-color: rgb(140, 0, 0);
    /* box-shadow: 0 0 5px 0 rgb(140, 0, 0); */
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

const Icon: React.FC<IconProps> = ({ name = "Loading", src }) => {
  return (
    <Container>
      <ImageContainer name={name}>
        {src ? <img src={src} /> : <Cross />}
      </ImageContainer>
    </Container>
  );
};

export default Icon;
