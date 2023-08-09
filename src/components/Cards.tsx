import React from 'react';
import Card from './Card';
import { ICardsState, ICardsProps } from '../@types/Cards';

class Cards extends React.Component<ICardsProps, ICardsState> {
  render() {
    const { countries }: ICardsProps = this.props;
    return (
      <main className="pt-4 border-solide border-b-2 flex justify-center flex-wrap gap-2">
        {countries.length < 1 && this.props.errorMessage === '' && (
          <span className="loading loading-spinner loading-lg"></span>
        )}
        {countries.map((country) => (
          <Card
            country={country}
            key={country.ccn3}
            handleOpenModal={(country) => this.props.handleOpenModal(country)}
          />
        ))}
      </main>
    );
  }
}

export default Cards;
