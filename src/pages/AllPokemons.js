import { useEffect } from 'react';

import PokemonList from '../components/pokemons/PokemonList';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import NoPokemonsFound from '../components/pokemons/NoPokemonsFound';
import useHttp from '../hooks/use-http';
import { getAllPokemons } from '../lib/api';

const AllPokemons = () => {
  const { sendRequest, status, data: loadedPokemons, error } = useHttp(
    getAllPokemons,
    true
  );

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === 'pending') {
    return (
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedPokemons || loadedPokemons.length === 0)) {
    return <NoPokemonsFound />;
  }

  return <PokemonList pokemons={loadedPokemons} />;
};

export default AllPokemons;
