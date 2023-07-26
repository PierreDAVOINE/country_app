import React from 'react';

class Card extends React.Component {
  render() {
    const { country } = this.props;
    return (
      <div className="card card-compact w-96 bg-slate-700 shadow-xl">
        <figure>
          <img src="https://picsum.photos/seed/picsum/200/300" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{country.name.common}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
