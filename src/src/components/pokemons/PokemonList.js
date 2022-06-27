import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import PokemonItem from './PokemonItem';
import classes from './PokemonList.module.css';

const sortPokemons = (pokemons, ascending) => {
  return pokemons.sort((pokemonA, pokemonB) => {
    if (ascending) {
      return pokemonA.id > pokemonB.id ? 1 : -1;
    } else {
      return pokemonA.id < pokemonB.id ? 1 : -1;
    }
  });
};

const PokemonList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedPokemons = sortPokemons(props.pokemons, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${(isSortingAscending ? 'desc' : 'asc')}`
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {isSortingAscending ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedPokemons.map((pokemon) => (
          <PokemonItem
            key={pokemon.id}
            id={pokemon.id}
            author={pokemon.author}
            text={pokemon.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default PokemonList;
