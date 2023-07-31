import React from 'react';
import Card from './Card';
import { ICardsState, ICardsProps } from '../@types/Cards';

class Cards extends React.Component<ICardsState, ICardsProps> {
  render() {
    const { countries }: ICardsProps = this.props;
    return (
      <main className="pt-4 border-solide border-b-2 flex justify-center flex-wrap gap-2">
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
