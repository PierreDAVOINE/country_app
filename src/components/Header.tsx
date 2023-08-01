import React from 'react';
import { IHeaderProps, IHeaderState } from '../@types/Header';

class Header extends React.Component<IHeaderProps, IHeaderState> {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.props.handleFilterCountries();
  }

  render() {
    const { search, handleChangeSearch } = this.props;

    return (
      <header className="border-solide border-b-2">
        <h1 className="py-4 text-3xl text-white text-center border-solide border-b-2">
          The country app
        </h1>
        <form
          className="join py-5 flex justify-center"
          onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="country"></label>
          <input
            className="input input-bordered join-item"
            placeholder="Ex: France"
            name="country"
            value={search}
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
          <button className="btn join-item" type="submit">
            Rechercher
          </button>
        </form>
      </header>
    );
  }
}

export default Header;
