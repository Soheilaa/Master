
import React, { Component } from 'react'

//import styled from 'styled-components';


export default class Card extends Component {
  state ={
    name: '',
    imageUrl: '',
    pokemonIndex: '',
    imageLoading: true,
    toManyRequests: false
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
      <div className='col'>
            <h5 className='card-header'>{this.state.pokemonIndex}</h5>
            <sprite className='card-img' 
                    onload={() => this.setState({imageLoading: false})}
                    onError={() => this.setState({ toManyRequests: true})} 
                    src = {this.state.imageUrl}
            />
            {this.state.toManyRequests ? (<h6 className='mx-auto'>
              <span className='badge'>To Many Request</span>
            </h6>
            ) : null}
            <div className='card-body'>
              <h6 className='card-title'>
                {this.state.name
                .toLowerCase()
                .split(" ")
                .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                .join(' ')
                }
              </h6>
            </div>
      </div>
    )
  }
}

