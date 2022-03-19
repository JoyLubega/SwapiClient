import React from "react";
import { styled } from "@mui/system";

import { IResponse } from '../dataTypes'


const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const TableWrapper = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 6px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : grey[100]};
  }
  `
);

interface ITableProps{
    people:IResponse
    loading: boolean
}
export default function Table(props:ITableProps) {
  
  return (
    <TableWrapper sx={{ width: "100%", maxWidth: "100%", marginTop:'20px' }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Gender</th>
            <th>Mass</th>
            <th>Height</th>
            <th>Home world</th>
          </tr>
        </thead>
        <tbody>
            {props.loading && 'Loading.....'}
          {!props.loading && props.people &&
            props.people.results.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td style={{ width: "auto" }} align="right">
                  {row.gender}
                </td>
                <td style={{ width: 120 }} align="right">
                  {row.mass}
                </td>
                <td style={{ width: 120 }} align="right">
                  {row.height}
                </td>
                <td style={{ width: 120 }} align="right">
                  {row.homeworld}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </TableWrapper>
  );
}
