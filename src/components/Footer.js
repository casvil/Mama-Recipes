import React from 'react';

import logo from './logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <header className="header">
      <img src={logo} className="header__logo" alt="logo" />
      <h1 className="header__title">Made in Barcelona</h1>
    </header>
  );
};

export default Footer;
