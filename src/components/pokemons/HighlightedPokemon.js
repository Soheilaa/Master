import classes from './HighlightedPokemon.module.css';

const HighlightedPokemon = (props) => {
  return (
    <figure className={classes.pokemon}>
      <p>{props.text}</p>
      <figcaption>{props.author}</figcaption>
    </figure>
  );
};

export default HighlightedPokemon;
