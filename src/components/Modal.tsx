import React from 'react';
import { IModalState, IModalProps } from '../@types/Modal';
import { ICountry } from '../@types/Countries';

class Modal extends React.Component<IModalProps, IModalState> {
  render() {
    const country: ICountry = this.props.country;
    // On prépare la monnaie
    const currency = Object.entries(country.currencies)[0][1];
    return (
      <div className="w-screen h-screen fixed bg-slate-600/80 z-10 top-0 left-0 flex items-center justify-center">
        <article className="w-11/12 h-4/6  sm:w-8/12 sm:h-4/6 bg-slate-600 rounded-lg p-6 ">
          <header>
            <figure>
              <img
                src={country.flags.png}
                alt={country.flags.alt}
                className=""
              />
            </figure>
            <h3 className="font-bold text-lg">
              Nom officiel : {country.translations.fra.official}
            </h3>
          </header>

          <main>
            <p>Nom commun : {country.translations.fra.common}</p>
            <p>Capital : {country.capital[0]}</p>
            <p>Continent : {country.continents[0]}</p>
            <p>Population : {country.population.toLocaleString()} personnes</p>
            <p>
              Monaie : {currency.name} - [{currency.symbol}]
            </p>
          </main>

          <footer className="modal-action">
            <button
              className="btn"
              onClick={() => this.props.handleOpenModal(this.props.country)}>
              Close
            </button>
          </footer>
        </article>
      </div>
    );
  }
}

export default Modal;
