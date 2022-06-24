import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import PokemonForm from '../components/pokemons/PokemonForm';
import useHttp from '../hooks/use-http';
import { addPokemon } from '../lib/api';

const NewPokemon = () => {
  const { sendRequest, status } = useHttp(addPokemon);
  const history = useHistory();

  useEffect(() => {
    if (status === 'completed') {
      history.push('/pokemons');
    }
  }, [status, history]);

  const addPokemonHandler = (pokemonData) => {
    sendRequest(pokemonData);
  };

  return <PokemonForm isLoading={status === 'pending'} onAddPokemon={addPokemonHandler} />;
};

export default NewPokemon;
