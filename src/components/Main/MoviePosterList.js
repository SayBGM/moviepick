import React, { Component } from 'react';
import { connect } from 'react-redux';

import MoviePoster from '../common/MoviePoster';
import MovieLoding from '../Animation/MovieLoding';
import MovieLodingFail from '../Animation/MovieLodingFail';
import MovieRankingType from './MovieRankingType';

import './MoviePosterList.scss';


/**
 * MoviePosterList
 * 
 * MoivePoster를 가로 리스트 형식으로 출력해주는 컴포넌트로써 버튼을 누르면 3개씩 스크롤을 이동시킴
 */
class MoviePosterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.loading !== this.props.loading) {
      this.setState({index: 0})
    }
  }

  renderList () {
    const { index } = this.state;
    const { movieList, loading, status } = this.props;
    if (loading) {
      return (
        <MovieLoding>
          <div className="MoviePosterList__LodingInfo__msg">
            <span>서버에서 영화 데이터를 불러오는 중입니다!</span><br />잠시만 기다려주세요 {':)'}
          </div>
        </MovieLoding>
      )
    }
    else if (status !== true) {
      return (
        <MovieLodingFail>
          <div className="MoviePosterList__LodingInfo__msg MoviePosterList__LodingInfo__msg--fail">
            <span>서버에서 영화 정보를 불러오지 못했습니다</span><br />
            새로고침 혹은 인터넷 연결을 확인해주세요 {':('}
          </div>
        </MovieLodingFail>
      )
    }
    return movieList.slice(index, index + 5).map((movie) => (
      <MoviePoster
        type="main"
        info={movie}
        key={movie.ranking}
      />
    ))
  }

  changeList() {
    const { index } = this.state;
    if (index === 0) {
      this.setState({index: 5})
    } else {
      this.setState({index: 0})
    }
  }

  render() {
    const { status, loading } = this.props;
    return (
      <React.Fragment>
        <MovieRankingType />
        <div className="MoviePosterList">
          {
            status === true && !loading? 
              <div
                className="MoviePosterList__Arrow "
                onClick={() => this.changeList()}
              >
              <div className="MoviePosterList__Arrow--Left"></div>
              </div> : null
          }
            {this.renderList()}
          {
            status === true && !loading ? 
              <div
                className="MoviePosterList__Arrow"
                onClick={() => this.changeList()}
              >
                <div className="MoviePosterList__Arrow--Right"></div>
              </div> : null
          }
        </div>
      </React.Fragment>
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

export default connect(mapStateToProps)(MoviePosterList);