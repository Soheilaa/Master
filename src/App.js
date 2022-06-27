/* import { Route, Switch, Redirect } from 'react-router-dom';

import AllPokemons from './pages/AllPokemons';
import PokemonDetail from './pages/PokemonDetail';
import NewPokemon from './pages/NewPokemon';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import { Component } from 'react/cjs/react.production.min'; */
import React, { Component } from 'react';

import './App.css';
import Dashboard from './components/layout/Dashboard';
import MainNavigation from './components/layout/MainNavigation';

class App extends Component {
  render() {
    return (  
      <div className='App'>
        <MainNavigation />
        <div className='container'>
         <Dashboard />
        </div>
      </div>
    );
  }
}
export default App;
/* function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/pokemons' />
        </Route>
        <Route path='/pokemons' exact>
          <AllPokemons />
        </Route>
        <Route path='/pokemons/:pokemonId'>
          <PokemonDetail />
        </Route>
        <Route path='/new-pokemon'>
          <NewPokemon />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App; */
