import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="border-solide border-b-2">
        <h1 className="py-4 text-3xl text-white text-center border-solide border-b-2">
          The country app
        </h1>
        <form className="join py-5 flex justify-center">
          <label htmlFor="country"></label>
          <input
            className="input input-bordered join-item"
            placeholder="Ex: France"
            name="country"
          />
          <button className="btn join-item">Rechercher</button>
        </form>
      </header>
    );
  }
}

export default Header;
