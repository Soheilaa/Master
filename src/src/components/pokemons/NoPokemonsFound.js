import { Link } from 'react-router-dom';

import classes from './NoPokemonsFound.module.css';

const NoPokemonsFound = () => {
  return (
    <div className={classes.nopokemons}>
      <p>No pokemons found!</p>
      <Link className='btn' to='/new-pokemon'>
        Add a Pokemon
      </Link>
    </div>
  );
};

export default NoPokemonsFound;
