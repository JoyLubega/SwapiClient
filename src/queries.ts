import { gql } from "@apollo/client";
export const PEOPLE_PER_PAGE_QUERY = gql`
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

export const SEARCH_QUERY = gql`
query People($name: String) {
    person(name: $name) {
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