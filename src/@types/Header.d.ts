export interface IHeaderProps {
  search: string;
  handleChangeSearch: (inputValue: string) => void;
  handleFilterCountries: () => void;
  darkMode: boolean;
  handleDarkMode: () => void;
}

export interface IHeaderState {}
