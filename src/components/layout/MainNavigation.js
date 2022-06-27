/* import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Pokemons</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to='/pokemons' activeClassName={classes.active}>
              All Pokemons
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-pokemon' activeClassName={classes.active}>
              Add a Pokemon
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
 */
import React, { Component } from 'react';


export default class MainNavigation extends Component {
  render() {
    return(
      <div>
        <nav className='navbar'>
          <a href="" className='navbar-brand'>
            pokedex
          </a>
        </nav>
      </div>
    );
  }
}