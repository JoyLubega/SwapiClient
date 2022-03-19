import React, { useState } from "react";
import Box from "@mui/material/Box";

import Table from "./TableComponent";
import SearchBar from "./search";
import { PaginationComponent } from "./pagination";

import { IResponse, initial } from "../dataTypes";

const People = () => {
  const [people, setPeople] = useState<IResponse>(initial);
  const [isloading, setLoading] = useState<boolean>(false);

  const getUpdatedPeople = (value: IResponse, loading: boolean) => {
    setPeople(value);
    setLoading(loading);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection:'column',  margin: 'auto', width: '50%', paddingTop:'10%'}}>
      <SearchBar getUpdatedPeople={getUpdatedPeople} />
      <Table people={people} loading={isloading} />
      <PaginationComponent getUpdatedPeople={getUpdatedPeople} />
    </Box>
  );
};
export default People;
