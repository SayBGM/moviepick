import React, { Component } from 'react';
import { Logo } from '../../assets';
import SearchBar from './SearchBar';

import './Navi.scss'

class Navi extends Component {
  render() { 
    const { getMovieList } = this.props
    return (
      <div className="Navi">
        <div className="Navi__wrapper">
          <div className="Navi__wrapper__img">
            <Logo width="150px"/>
          </div>
          <SearchBar />
        </div>
      </div>
    );
  }
}


export default Navi;