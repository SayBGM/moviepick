import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviePoster from '../common/MoviePoster';

import './MoiveCompareList.scss';

class MoiveCompareList extends Component {
  renderList () {
    const { compareList } = this.props;
    return compareList.length === 0 ? (
      <div className="MoiveCompareList__msg MoiveCompareList__msg--empty">
        비교할 영화가 없습니다. 검색 혹은 메인에서 비교 버튼을 눌러주세요!
      </div>) : compareList.map((movie, index) => (
        <MoviePoster 
          type="select"
          info={movie}
          key={movie.ranking}
          index={index}
        />
      ))
  }
  
  render() {
    const { compareMsg } = this.props;
    return (
      <div className="MoiveCompareList">
        <div className="MoiveCompareList__msg">
          {compareMsg}
        </div>
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  compareList: state.MovieCompareReducer.compareList,
  compareMsg: state.MovieCompareReducer.msg,
})

export default connect(mapStateToProps)(MoiveCompareList);