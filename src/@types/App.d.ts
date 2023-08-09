import { Country } from './Country';

export interface IAppState {
  search: string;
  countries: Array<Country>;
  countriesFiltered: Array<Country>;
  modalIsOpen: boolean;
  selectedCountry: Country | null;
  darkMode: boolean;
  errorMessage: string;
}

export interface IAppProps {}
