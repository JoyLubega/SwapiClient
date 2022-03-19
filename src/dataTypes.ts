export interface IProps {
  data: IResponse;
  loading: boolean;
}

export interface IResult {
  name: string;
  gender: string;
  mass: number;
  height: number;
  homeworld: string;
}

export interface IResponse {
  count: number;
  previous: string;
  next: string;
  results: IResult[];
}
export const initial = {
  count: 0,
  previous: "",
  next: "",
  results: [],
};