import React, { Component } from 'react';
import { Logo } from '../../assets';
import SearchBar from './SearchBar';

import './Navi.scss'
import { getMovieList } from '../../core/redux/actions/MovieInfoAction';
import {connect} from 'react-redux';

class Navi extends Component {
  render() { 
    const { getMovieList } = this.props
    return (
      <div className="Navi">
        <div className="Navi__wrapper">
          <div className="Navi__wrapper__img" onClick={() => getMovieList()}>
            <Logo width="150px"/>
          </div>
          <SearchBar />
        </div>
      </div>
    );
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    getMovieList: () => dispatch(getMovieList())
  }
}

export default connect(null, mapDispathToProps)(Navi);