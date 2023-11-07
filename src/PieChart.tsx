import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Paper from "@mui/material/Paper";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Strategy 1", "Strategy 2", "Strategy 3", "Strategy 4"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 12.5, 12.5, 25],
      backgroundColor: ["#855Cf8", "#e289f2", "#7879f1", "#b085ff"],
      borderWidth: 0,
    },
  ],
};

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
`;

export default function PieChart() {
  return (
    <Paper sx={{ padding: 4 }}>
      <TitleContainer>
        <Title>Lending Allocations</Title>
        <Title>$5000 USDC</Title>
      </TitleContainer>

      <Pie data={data} />
    </Paper>
  );
}
