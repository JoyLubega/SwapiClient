import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";

import Pagination from "@mui/material/Pagination";
import { usePagination } from "./pagination";

const blue = {
  200: "#A5D8FF",
  400: "#3399FF",
};

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

const Root = styled("div")(
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

export default function UnstyledTable() {
  const [page, setPage] = useState(1);
  const result = usePagination(page);
  
  const { loading, data } = result;

  const handleChangePage = (
    event: React.ChangeEvent<HTMLButtonElement | unknown>,
    page: number
  ) => {
    setPage(page);
  };

  
  return (
    <Root sx={{ width: "70%", maxWidth: "100%" }}>
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
          {data &&
            data.results.map((row) => (
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
      <Pagination
        page={page}
        onChange={handleChangePage}
        count={Math.ceil(data.count / 10)}
        variant="outlined"
        color="secondary"
      />
    </Root>
  );
}
