import React, { Component } from 'react'

import styled from 'styled-components';

const sprite = styled.img`
  width: 5em;
  height: 5em;
`;

export default class Card extends Component {
  state = {
    name: '',
    imageUrl: '',
    pokemonIndex: '',
  };

  componentDidMount () {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
  
    
    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    return (
      <div className="col">
          <div className='card'>
            <h5 className='card-header'>
              {this.state.pokemonIndex}
            </h5>
            <sprite className='card-img' 
              onload={() => this.setState({imageLoading: false})}
              onError={() => this.setState({ toManyRequests: true})} 
              src = {this.state.imageUrl}
            />
            <div className='card-body'>
              <h6 className='card-title'> 
                {this.state.name
                .toLowerCase()
                .split(" ")
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(' ')
                }
              </h6>
            </div>
         </div>
      </div>
    )
  }
}

