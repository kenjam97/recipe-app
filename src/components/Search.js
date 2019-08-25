import React, { Component } from 'react';
import './app/App.css';
import icon from '../assets/images/magnifier.svg';

class Search extends Component {
  render() {
    return (
      <form className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search over 1,000,000 recipes"
        />
        <button className="btn search__btn">
          <img className="search__icon" src={icon} alt="icon" />
          <span>Search</span>
        </button>
      </form>
    );
  }
}

export default Search;
