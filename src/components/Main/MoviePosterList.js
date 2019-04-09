import React, { Component } from 'react';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';

import MoviePoster from '../common/MoviePoster';
import {getMovieList} from '../../core/redux/actions/MovieInfoAction';
import {LodingAnimation} from '../../assets/index';

import './MoviePosterList.scss';

/**
 * MoviePosterList
 * 
 * MoivePoster를 가로 리스트 형식으로 출력해주는 컴포넌트로써 버튼을 누르면 3개씩 스크롤을 이동시킴
 */
class MoviePosterList extends Component {
  componentDidMount() {
    this.props.getMovieList();
  }

  renderList () {
    const { movieList, loading, status } = this.props;
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: LodingAnimation,
    };
    console.log(movieList)
    if (loading) {
      return (
        <div className="MoviePosterList__LodingInfo">
          <Lottie 
            options={defaultOptions}
            height={400}
            isClickToPauseDisabled={true}
          />
          <div className="MoviePosterList__LodingInfo__msg">
            <span>서버에서 영화 데이터를 불러오는 중입니다!</span><br />
            잠시만 기다려주세요 {':)'}
          </div>
        </div>
      )
    }
    else if (status === null || !status) {
      return <div></div>
    }
    return movieList.map((movie) => (
      <MoviePoster
        type="main"
        info={movie}
        key={movie.ranking}
      />
    ))
  }

  render() {
    return (
      <div className="MoviePosterList">
        <div className="MoviePosterList__Arrow--Left">
          {'<'}
        </div>
          {this.renderList()}
        <div className="MoviePosterList__Arrow--Right">
          {'>'}
        </div>
      </div>
    );
  }
}
 
const mapStateToProps = (state) => {
  return {
    movieList: state.MovieInfoReducer.movieList,
    loading: state.MovieInfoReducer.loading,
    status: state.MovieInfoReducer.status
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMovieList: () => dispatch(getMovieList())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviePosterList);