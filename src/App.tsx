import React from "react";
import styled from "styled-components";
import BasicTable from "./BasicTable";
import PieChart from "./PieChart";

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7fafc;
`;

function App() {
  return (
    <Screen>
      <PieChart />

      <BasicTable />
    </Screen>
  );
}

export default App;
