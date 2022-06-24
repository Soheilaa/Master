import { Link } from 'react-router-dom';

import classes from './PokemonItem.module.css';

const PokemonItem = (props) => {
  return (
    <li className={classes.item}>
      <figure>
        <blockpokemon>
          <p>{props.text}</p>
        </blockpokemon>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className='btn' to={`/pokemons/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default PokemonItem;
