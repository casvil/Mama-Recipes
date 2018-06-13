import React from 'react';

import logo from './logo.svg';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">
        Welcome to React
        <span role="img" aria-label="pasta">
          🍝
        </span>
        Recipes
      </h1>
    </header>
  );
};

export default Header;
