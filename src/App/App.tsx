import React from 'react';
import './App.css';
import Header from '../components/Header';
import Cards from '../components/Cards';
import { IAppState, IAppProps } from '../@types/App';
import axios from 'axios';

class App extends React.Component<IAppState, IAppProps> {
  // On initialise le state
  constructor(props: IAppState) {
    super(props);
    this.state = {
      countries: [],
    };
  }

  // Au chargement du composant, on va chercher les données
  componentDidMount() {
    const result = axios.get('https://restcountries.com/v3.1/all');
    result.then((response) => {
      console.log('reponse ! ', response.data);
      this.setState({
        countries: response.data,
      });
    });
  }

  render() {
    return (
      <div className="w-5/6 m-auto py-4">
        <Header />
        <Cards countries={this.state.countries} />
      </div>
    );
  }
}

export default App;
