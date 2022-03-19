import React, {useState, useCallback, useEffect} from "react";

import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import {debounce} from 'lodash';

import { useQuery } from "@apollo/client";

import { IResponse } from '../dataTypes'
import { SEARCH_QUERY } from "../queries";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.secondary.dark, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.secondary.light, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "70%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
interface ISearchProps{
    getUpdatedPeople:(data: IResponse, loading:boolean)=>void
    
}
const SearchBar = (props:ISearchProps) => {
    const [ inputValue, setInputValue] =useState<string>('')
    const debounceFn = useCallback(debounce((query:string)=> setInputValue(query), 1000), []);
    
    const { loading, data } = useQuery(SEARCH_QUERY, {
        variables: {name: inputValue},
        fetchPolicy: "cache-and-network",
      });
    
      
    useEffect(()=>{
        if(inputValue && !loading){
            props.getUpdatedPeople(data.person[0], loading)
        }
    },[loading, inputValue])

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>,

      ) => {
        debounceFn(event.target.value);
      };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" color="disabled" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search by name..."
        inputProps={{ "aria-label": "search" }}
        onChange={handleChange}
      />
    </Search>
  );
};
export default SearchBar;
