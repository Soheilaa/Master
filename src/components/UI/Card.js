import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class Card extends Component {
  
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
  };

  componentDidMount () {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`;

    this.setState({ name, imageUrl, pokemonIndex })
  }

  render() {
    return (
      <div className="col">
        <Link to={`pokemon/${this.state.pokemonIndex}`}>

          <div href='' className='card-title'>
            {this.state.pokemonIndex} ,
            {this.state.name.toLowerCase().split(" ").map(
              letter => letter.charAt(0).toUpperCase() + letter.substring(1)
              ).join(' ')
            }
          </div>

          <div className='card-img'>
            <img src = {this.state.imageUrl} alt="pokimon img"/>
          </div>

        </Link>
      </div>
    );
  }
}

