import * as React from "react";
import styled from "styled-components";
import Arrow from "../../../components/Arrow/Arrow";
import { getChangelog } from "../../../services/hideout";
import Loader from "../../../components/Loader/Loader";

interface ContainerProps {
  visible: boolean;
}

const Container = styled.div<ContainerProps>`
  font-family: ${props => props.theme.font};
  border: 1px solid ${props => props.theme.colors.primary};
  background-color: black;
  position: fixed;
  left: ${props => (props.visible ? "0" : "-303px")};
  transition: 0.5s;
  bottom: 0;
  height: 35%;
  width: 300px;
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

const ShowButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  padding: 10px 10px;
  bottom: -1px;
  right: -37px;
  background-color: ${props => props.theme.colors.primary};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 10px;
  color: ${props => props.theme.colors.primary};
  overflow-x: hidden;
  overflow-y: auto;

  & > h2,
  p {
    margin: 5px 0;
  }

  & > ul {
    list-style-type: none;
    padding: 0;

    li:before {
      content: "-";
      padding: 0 10px;
    }
  }
`;

export const Changelog = () => {
  const [visible, setVisible] = React.useState(true);
  const [changelog, setChangelog] = React.useState([]);

  React.useEffect(() => {
    if (visible && changelog.length <= 0) {
      getChangelog().then(response => setChangelog(response));
    }
  }, [visible]);

  const mapChangelog = () => {
    return changelog.map(item => {
      return (
        <>
          <h2>{item.date}</h2>
          <ul>
            {item.changes.map((change: string) => (
              <li>{change}</li>
            ))}
          </ul>
          <p>{item.description}</p>
        </>
      );
    });
  };

  return (
    <>
      <Container visible={visible}>
        <ShowButton onClick={() => setVisible(!visible)}>
          <Arrow color="black" direction={visible ? "left" : "right"} />
        </ShowButton>
        <Header>
          <HeaderTitle>Changelog</HeaderTitle>
        </Header>
        <Content>{changelog.length > 0 ? mapChangelog() : <Loader />}</Content>
      </Container>
    </>
  );
};
