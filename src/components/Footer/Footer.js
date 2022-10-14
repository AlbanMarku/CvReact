import React from 'react';
import './footer.css';
import logo from './logo.png';

function Footer() {
  return (
    <div className="Footer">
      <strong>AlbanMarku</strong>
      <a href="https://github.com/AlbanMarku"><img src={logo} alt="git logo" /></a>
    </div>
  );
}

export default Footer;
