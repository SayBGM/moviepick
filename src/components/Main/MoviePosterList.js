import React, { Component } from 'react';
import MoviePoster from '../common/MoviePoster';

/**
 * MoviePosterList
 * 
 * MoivePoster를 가로 리스트 형식으로 출력해주는 컴포넌트로써 버튼을 누르면 3개씩 스크롤을 이동시킴
 */
class MoviePosterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posterData: [
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 1,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 2,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 3,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 4,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 5,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
        {
          imgSrc: require('../../assets/testPoster.jpg'),
          ranking: 6,
          name: '어벤져스: 엔드게임',
          manyScreen: 697,
          screening: 3223,
          audience: 353274,
        },
      ]
    }
  }

  renderList () {
    return this.state.posterData.map((movie) => (
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
 
export default MoviePosterList;