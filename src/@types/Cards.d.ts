import { Country } from './Country';

export interface ICardsState {}

export interface ICardsProps {
  countries: Array<Country>;
  handleOpenModal: (country: Country) => void;
  errorMessage: string;
}
