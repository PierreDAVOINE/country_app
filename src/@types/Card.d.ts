import { ICountry } from './Countries';

export interface ICardState {}

export interface ICardProps {
  country: ICountry;
  handleOpenModal: (country: Country) => void;
}
