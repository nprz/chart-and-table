import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import styled from "styled-components";

function createData(
  name: string,
  TVL: string,
  volatility: string,
  collateral: string,
  PNL: number
) {
  return { name, TVL, volatility, collateral, PNL };
}

const rows = [
  createData("Strategy 1", "$100,000", "Low", "$1000", 100),
  createData("Strategy 2", "$12,500", "Medium", "$1000", -100),
  createData("Strategy 3", "$12,500", "Medium", "$1000", 100),
  createData("Strategy 4", "$12,500", "High", "$1000", -100),
];

function renderChip(value: string) {
  let chipColor;

  if (value === "Low") {
    chipColor = "purple";
  } else if (value === "Medium") {
    chipColor = "violet";
  } else {
    chipColor = "blue";
  }

  return (
    <Chip label={value} sx={{ backgroundColor: chipColor, color: "white" }} />
  );
}

function renderPNL(value: number) {
  let color;
  let symbol;

  if (value < 0) {
    color = "red";
    symbol = "-";
  } else {
    color = "green";
    symbol = "+";
  }

  const absoluteVal = Math.abs(value);

  return <div style={{ color }}>{`${symbol} $${absoluteVal}`}</div>;
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 18px;
  margin-bottom: 16px;
`;

export default function BasicTable() {
  return (
    <Paper sx={{ padding: 3, marginLeft: 20 }}>
      <TitleContainer>
        <Title>Strategy Performance</Title>
      </TitleContainer>

      <TableContainer
        component={"div"}
        sx={{ maxWidth: 650, border: "1px solid grey", borderRadius: 6 }}
      >
        <Table sx={{ minWidth: 650, maxWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Strategy</TableCell>
              <TableCell align="left">TVL</TableCell>
              <TableCell align="left">Volatility</TableCell>
              <TableCell align="left">Collateral</TableCell>
              <TableCell align="left">PNL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.TVL}</TableCell>
                <TableCell align="left">{renderChip(row.volatility)}</TableCell>
                <TableCell align="left">{row.collateral}</TableCell>
                <TableCell align="left">{renderPNL(row.PNL)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
