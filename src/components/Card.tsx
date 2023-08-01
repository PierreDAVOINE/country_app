import React from 'react';
import { ICardState, ICardProps } from '../@types/Card';

class Card extends React.Component<ICardState, ICardProps> {
  render() {
    const { country }: ICardProps = this.props;
    return (
      <div className="card card-compact w-96 bg-slate-700 shadow-xl">
        <figure>
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="w-full max-h-56"
          />
        </figure>
        <div className="card-body flex flex-col justify-end">
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
