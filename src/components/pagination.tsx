import React, { useState, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

const PEOPLE_PER_PAGE_QUERY = gql`
  query People($page: Int) {
    people(page: $page) {
      count
      next
      previous
      results {
        name
        height
        mass
        gender
        homeworld
      }
    }
  }
`;

interface IProps {
  data: IResponse;
  loading: boolean;
}

interface IResult {
  name: string;
  gender: string;
  mass: number;
  height: number;
  homeworld: string;
}
interface IResponse {
  count: number;
  previous: string;
  next: string;
  results: IResult[];
}
interface IProps {
  data: IResponse;
  loading: boolean;
}
const initial = {
  count: 0,
  previous: "",
  next: "",
  results: [],
};
export const usePagination = (page: number): IProps => {
  const [people, setPeople] = useState<IResponse>(initial);
  const { loading, error, data } = useQuery(PEOPLE_PER_PAGE_QUERY, {
    variables: { page: page },
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (!loading) {
      setPeople(data.people[0]);
    }
  }, [loading]);

  return {
    data: people,
    loading,
  };
};
