import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

import { useQuery } from "@apollo/client";

import { IResponse } from "../dataTypes";

import { PEOPLE_PER_PAGE_QUERY } from "../queries";


interface IPaginationProps {
  getUpdatedPeople: (data: IResponse, loading: boolean) => void;
}
export const PaginationComponent = (props: IPaginationProps) => {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(PEOPLE_PER_PAGE_QUERY, {
    variables: { page: page },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!loading) {
      props.getUpdatedPeople(data.people[0], loading);
    }
  }, [loading]);

  const handleChangePage = (
    event: React.ChangeEvent<HTMLButtonElement | unknown>,
    page: number
  ) => {
    setPage(page);
  };

  return (
    <Box sx={{ marginTop:'15px'}}>
      {
        <Pagination
          page={page}
          onChange={handleChangePage}
          count={ !data ? 1 : Math.ceil(data.people[0].count / 10)}
          variant="outlined"
          color="secondary"
        />
      }
    </Box>
  );
};
