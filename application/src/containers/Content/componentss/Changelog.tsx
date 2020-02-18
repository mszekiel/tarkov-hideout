import * as React from "react";
import styled from "styled-components";

interface ContainerProps {
  visible: boolean;
}

const Container = styled.div<ContainerProps>`
  font-family: ${props => props.theme.font};
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: black;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 40%;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  font-weight: bold;
  font-size: 16pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
`;

const HeaderTitle = styled.span`
  padding: 5px 10px;
`;

export const Changelog = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Container visible={visible}>
        <Header>
          <HeaderTitle>Changelog</HeaderTitle>
        </Header>
      </Container>
    </>
  );
};
