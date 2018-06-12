import React from 'react';

import logo from './logo.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header__header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">
        Welcome to React{' '}
        <span role="img" aria-label="pasta">
          🍝
        </span>{' '}
        Recipes
      </h1>
      <h4>Made with ♥ from Torcy, FR</h4>
    </header>
  );
};

export default Header;
