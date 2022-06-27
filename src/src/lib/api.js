const FIREBASE_DOMAIN = 'https://react-prep-default-rtdb.firebaseio.com';

export async function getAllPokemons() {
  const response = await fetch(`${FIREBASE_DOMAIN}/pokemons.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch pokemons.');
  }

  const transformedPokemons = [];

  for (const key in data) {
    const pokemonObj = {
      id: key,
      ...data[key],
    };

    transformedPokemons.push(pokemonObj);
  }

  return transformedPokemons;
}

export async function getSinglePokemon(pokemonId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/pokemons/${pokemonId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not fetch pokemon.');
  }

  const loadedPokemon = {
    id: pokemonId,
    ...data,
  };

  return loadedPokemon;
}

export async function addPokemon(pokemonData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/pokemons.json`, {
    method: 'POST',
    body: JSON.stringify(pokemonData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not create pokemon.');
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.pokemonId}.json`, {
    method: 'POST',
    body: JSON.stringify(requestData.commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not add comment.');
  }

  return { commentId: data.name };
}

export async function getAllComments(pokemonId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${pokemonId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Could not get comments.');
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
