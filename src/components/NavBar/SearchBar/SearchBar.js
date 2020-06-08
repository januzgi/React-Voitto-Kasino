import React from 'react';
import classes from './SearchBar.module.css';
import searchIcon from '../../../ikonit/haku.svg';

const SearchBar = () => {
  // Suorita haku
  const search = () => {
    console.log('search');
  };

  // Tarkista input kenttään syötetty char
  const checkInputKey = (event) => {
    // Jos käyttäjä painoi enteriä input:ssa
    if (event.keyCode === 13) {
      document.getElementById('input').value = '';
      search();
    }
  };

  return (
    <div className={classes.searchBar}>
      <img
        onClick={search}
        className={classes.inputImg}
        src={searchIcon}
        alt='Hae pelejä ikoni'
      ></img>
      <input
        id='input'
        className={classes.input}
        placeholder='Hae pelejä'
        onKeyUp={checkInputKey}
      ></input>
    </div>
  );
};

export default SearchBar;
