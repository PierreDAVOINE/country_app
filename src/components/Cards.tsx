import React from 'react';
import Card from './Card';
import { IAppState } from '../@types/App';

class Cards extends React.Component {
  render() {
    const { countries }: IAppState = this.props;
    return (
      <main className="py-4 border-solide border-b-2 flex justify-center flex-wrap gap-2">
        {countries.length < 1 && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {countries.map((country) => (
          <Card country={country} />
        ))}
      </main>
    );
  }
}

export default Cards;
