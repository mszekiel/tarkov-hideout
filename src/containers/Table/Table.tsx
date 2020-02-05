import * as React from "react";
import styled from "styled-components";
import Process from "../../components/Process";
import ItemDate from "../../utils/itemDate";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin: 50px 0;
  justify-content: center;
`;

const Main = styled.table`
  font-family: ${props => props.theme.font};
  color: ${props => props.theme.colors.primary};

  & tr > * {
    text-align: center;
    padding: 10px 30px;
  }

  & tr > th {
    font-size: 16pt;
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Money = styled.td``;

const Table = () => {
  return (
    <Container>
      <Main>
        <tr>
          <th>Facility</th>
          <th>Crafting</th>
          <th>Profit</th>
          <th>Materials cost</th>
          <th>Products cost</th>
        </tr>
        <tr>
          <td>Generator</td>
          <td>
            <Process
              input={[
                { name: "red lab card", amount: 1 },
                { name: "cable", amount: 3 }
              ]}
              time={new ItemDate(0, 45, 0)}
              output={[
                { name: "adar", amount: 2 },
                { name: "toilet", amount: 3 }
              ]}
            />
          </td>
          <td>- 15 000 RUB</td>
          <td>12 000 RUB</td>
          <td>34 000 RUB</td>
        </tr>
        <tr>
          <td>Generator</td>
          <td>
            <Process
              input={[
                { name: "ram", amount: 1 },
                { name: "graphic", amount: 3 }
              ]}
              time={new ItemDate(0, 45, 0)}
              output={[
                { name: "m4 colt", amount: 2 },
                { name: "chocolate", amount: 3 }
              ]}
            />
          </td>
          <td>15 800 RUB</td>
          <td>145 000 RUB</td>
          <td>34 000 RUB</td>
        </tr>
      </Main>
    </Container>
  );
};

export default Table;
