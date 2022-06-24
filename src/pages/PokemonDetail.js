import { Fragment, useEffect } from 'react';
import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';

import HighlightedPokemon from '../components/pokemons/HighlightedPokemon';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSinglePokemon } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const PokemonDetail = () => {
  const match = useRouteMatch();
  const params = useParams();

  const { pokemonId } = params;

  const { sendRequest, status, data: loadedPokemon, error } = useHttp(
    getSinglePokemon,
    true
  );

  useEffect(() => {
    sendRequest(pokemonId);
  }, [sendRequest, pokemonId]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered'>{error}</p>;
  }

  if (!loadedPokemon.text) {
    return <p>No pokemon found!</p>;
  }

  return (
    <Fragment>
      <HighlightedPokemon text={loadedPokemon.text} author={loadedPokemon.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default PokemonDetail;
