export interface ICountries {
  countries: Array<ICountry>;
}

export interface ITranslation {
  fra: {
    official: string;
  };
}

export interface ICountry {
  name: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
  alpha3Code: string;
  nativeName: string;
  subregion: string;
  translations: ITranslation;
  continent: Array<string>;
}
