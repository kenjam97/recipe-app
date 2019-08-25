import React, { Component } from 'react';
import Search from './Search';
import Likes from './Likes';
import logo from '../assets/images/logo.png';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt="Logo" />
        <Search />
        <Likes />
      </div>
    );
  }
}

export default Header;
