import React from "react";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { IResponse, IResult } from "../dataTypes";

import Skeleton from "@mui/material/Skeleton";

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

const StyledTableRow = styled("tr")(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#aaeeff",
  },
}));

interface ITableProps {
  people: IResponse;
  loading: boolean;
}
export default function Table(props: ITableProps) {
  const navigate = useNavigate();

  const getDetails = (row: any) => {
    navigate(`/${row.name}`, { state: row });
  };

  const getSkeleton = () => {
    return Array.from(Array(10).keys()).map((val, index) => {
      return (
        <StyledTableRow key={index}>
          <td>
            {" "}
            <Skeleton animation="wave" />
          </td>
          <td style={{ width: "auto" }} align="right"><Skeleton animation="wave" /></td>
          <td style={{ width: 120 }} align="right"><Skeleton animation="wave" /></td>
          <td style={{ width: 120 }} align="right"><Skeleton animation="wave" /></td>
          <td style={{ width: 120 }} align="right"><Skeleton animation="wave" /></td>
        </StyledTableRow>
      );
    });
  };
  return (
    <TableWrapper sx={{ width: "100%", maxWidth: "100%", marginTop: "20px" }}>
      <table aria-label="table">
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
          {props.loading && getSkeleton()}
          {!props.loading &&
            props.people &&
            props.people.results.map((row: IResult) => (
              <StyledTableRow key={row.name} onClick={() => getDetails(row)}>
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
              </StyledTableRow>
            ))}
        </tbody>
      </table>
    </TableWrapper>
  );
}
