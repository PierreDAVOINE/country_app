import { Country } from './Country';

export interface IAppState {
  countries: Array<Country>;
}

export interface IAppProps {
  countries: Array<Country>;
}
