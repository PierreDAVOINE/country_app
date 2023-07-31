import React from 'react';
import { ICardState, ICardProps } from '../@types/Card';

class Card extends React.Component<ICardState, ICardProps> {
  render() {
    const { country }: ICardProps = this.props;
    return (
      <div className="py-5 card card-compact w-96 bg-slate-700 shadow-xl">
        <figure>
          <img src={country.flags.png} alt={country.flags.alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {country.translations.fra.official} - [{country.continents[0]}]
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">More</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
