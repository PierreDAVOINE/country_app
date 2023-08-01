import React from 'react';
import './App.css';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { IAppState, IAppProps } from '../@types/App';
import axios from 'axios';

class App extends React.Component<IAppProps, IAppState> {
  // On initialise le state
  constructor(props: IAppProps) {
    super(props);
    this.state = {
      countries: [],
      search: '',
      countriesFiltered: [],
    };
  }

  // Au chargement du composant, on va chercher les données
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

  // handleChangeSearch permet de mettre à jour le state search
  handleChangeSearch = (inputValue: string): void => {
    this.setState({
      search: inputValue,
    });
  };

  // handleFilterCountries permet de mettre à jour le state countriesFiltered
  //! TODO: Améliorer le filtre pour les recherches en francais
  handleFilterCountries = (): void => {
    const newCountriesFiltered = this.state.countries.filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(this.state.search.toLowerCase());
    });
    this.setState({
      countriesFiltered: newCountriesFiltered,
    });
  };

  render() {
    return (
      <div className="w-5/6 m-auto py-4">
        <Header
          search={this.state.search}
          handleChangeSearch={(inputValue) =>
            this.handleChangeSearch(inputValue)
          }
          handleFilterCountries={() => this.handleFilterCountries()}
        />
        <Cards countries={this.state.countriesFiltered} />
      </div>
    );
  }
}

export default App;
