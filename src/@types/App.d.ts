import { Country } from './Country';

export interface IAppState {
  search: string;
  countries: Array<Country>;
  countriesFiltered: Array<Country>;
}

export interface IAppProps {}
