import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Logo } from '../../assets';
import SearchBar from './SearchBar';

import './Navi.scss'

class Navi extends Component {
  render() { 
    const { getMovieList } = this.props
    return (
      <div className="Navi">
        <div className="Navi__wrapper">
          <Link to="/">
            <div className="Navi__wrapper__img">
              <Logo width="150px"/>
            </div>
          </Link>
          <SearchBar />
        </div>
      </div>
    );
  }
}


export default Navi;