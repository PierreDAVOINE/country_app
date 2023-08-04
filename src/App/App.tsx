import React from 'react';
import axios from 'axios';
import { IAppState, IAppProps } from '../@types/App';
import Header from '../components/Header';
import Cards from '../components/Cards';
import Modal from '../components/Modal';
import './App.css';
import { ICountry } from '../@types/Countries';

class App extends React.Component<IAppProps, IAppState> {
  // On initialise le state
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      countries: [],
      search: '',
      countriesFiltered: [],
      modalIsOpen: false,
      selectedCountry: null,
    };
  }

  //* Au chargement du composant, on va chercher les données
  componentDidMount() {
    const result = axios.get('https://restcountries.com/v3.1/all');
    result.then((response) => {
      console.log('reponse ! ', response.data);
      this.setState({
        countries: response.data,
        countriesFiltered: response.data,
      });
    });
  }

  //* handleChangeSearch permet de mettre à jour le state search
  handleChangeSearch = (inputValue: string): void => {
    this.setState({
      search: inputValue,
    });
  };

  //* handleFilterCountries permet de mettre à jour le state countriesFiltered
  handleFilterCountries = (): void => {
    // On récupère les pays qui correspondent à la recherche
    // D'abord dans les translations en français officielles
    const countriesFilteredFraOff = this.state.countries.filter((country) => {
      return country.translations.fra.official
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          this.state.search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        );
    });

    // Ensuite dans les translations en français communes
    const countriesFilteredFraCom = this.state.countries.filter((country) => {
      return country.translations.fra.common
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          this.state.search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        );
    });

    // Ensuite dans les translations en anglais
    const countriesFilteredEng = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(
          this.state.search
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
        );
    });

    // On regroupe les résultats dans un tableau
    let allCountriesFiltered = [
      ...countriesFilteredFraOff,
      ...countriesFilteredFraCom,
      ...countriesFilteredEng,
    ];

    // On retire les doublons de allCountriesFiltered
    allCountriesFiltered = allCountriesFiltered.filter((country, index) => {
      return allCountriesFiltered.indexOf(country) === index;
    });

    // On met à jour le state countriesFiltered pour afficher le résultat de la recherche
    this.setState({
      countriesFiltered: allCountriesFiltered,
    });
  };

  //* Gestion de l'ouverture de la modal
  handleOpenModal = (country: ICountry): void => {
    this.setState({
      selectedCountry: country,
      modalIsOpen: !this.state.modalIsOpen,
    });
  };

  render() {
    return (
      <div className="w-5/6 m-auto py-4">
        {this.state.modalIsOpen && (
          <Modal
            country={this.state.selectedCountry}
            handleOpenModal={(country) => this.handleOpenModal(country)}
          />
        )}
        <Header
          search={this.state.search}
          handleChangeSearch={(inputValue) =>
            this.handleChangeSearch(inputValue)
          }
          handleFilterCountries={() => this.handleFilterCountries()}
        />
        <Cards
          countries={this.state.countriesFiltered}
          handleOpenModal={(country) => this.handleOpenModal(country)}
        />
      </div>
    );
  }
}

export default App;

/*
Afin d'affiner la recherche on normalise les strings
> On passe en minuscule
.toLowerCase()
> On retire les accents
.normalize('NFD')
> On précise que l'on ne veut pas de caractères spéciaux
.replace(/[\u0300-\u036f]/g, '')
*/
