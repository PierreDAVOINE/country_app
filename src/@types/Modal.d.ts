import { ICountry } from '../types';

export interface IModalState {}

export interface IModalProps {
  country: ICountry | null;
  handleOpenModal: (country: Country) => void;
}
