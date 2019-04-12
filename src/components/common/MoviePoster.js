import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import { Compare, SelectIcon } from '../../assets';

import './MoviePoster.scss';
import {inCompareMovie, outCompareMovie} from '../../core/redux/actions/MovieCompareAction';

/**
 * 영화 포스터 컴포넌트
 * @param {String} type 값은 main 혹은 select로 이루어져 있으며 추후 늘어날 수 있음
 * @param {String} imgSrc 이미지 경로
 * @param {Object} info 영화 정보
 */
class MoviePoster extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
  }
  render() { 
    const { type, info, inCompareMovie, index, outCompareMovie } = this.props;
    const {
      imgSrc,
      ranking,
      name,
      manyScreen,
      screening,
      audience,
    } = info;
    const { isShow } = this.state;
    return (
      <div className={
        classNames(
          'Main__MoviePoster',
          {
            'Main__MoviePoster--main': type == 'main',
            'Main__MoviePoster--select': type == 'select'
          }
        )
      }>
        <div 
          className={
            classNames(
              'MoviePoster',
              {
                'MoviePoster--main': type == 'main',
                'MoviePoster--select': type == 'select'
              }
            )
          }
          onMouseOver={() => this.setState({isShow:true})}
          onMouseLeave={() => this.setState({isShow:false})}
        >
          <img src={imgSrc} style={{width:'100%'}}/>
            <div 
              className={
                classNames('MoviePoster__btn MoviePoster__btn--select', {
                  'MoviePoster__btn--blind': !isShow
                })
              }
              onClick={(e) => console.log(e)}
            >
            <SelectIcon width="18px" height="18px"/>
            </div>
            {
              type === 'main' ? 
              <div 
                className={
                  classNames('MoviePoster__btn MoviePoster__btn--compare', {
                    'MoviePoster__btn--blind': !isShow
                  })
                }
                onClick={() => {inCompareMovie(info);}}
              >
                <Compare width="18px" height="18px"/>
              </div> :
              <div className="MoviePoster--delete" onClick={() => outCompareMovie(index)}>
                ×
              </div>
            }
        </div>
        {
          type == 'main' ?
          <div className="MovieInfo">
            <div className="MovieInfo__title">
              <span className="MovieInfo__title__ranking">{ranking}</span>{'  '}
              <span className="MovieInfo__title__name">{name}</span>
            </div>
            <div className="MovieInfo__screen">
              {manyScreen} 스크린 | {screening}회 상영
            </div>
            <div className="MovieInfo__audience">
              관객수 {audience}명
            </div>
          </div>
          : 
          <div className="MovieInfo">
            <div className="MovieInfo__title--select">
              {name}
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  inCompareMovie: (data) => dispatch(inCompareMovie(data)),
  outCompareMovie: (index) => dispatch(outCompareMovie(index))
})
 
export default connect(null, mapDispatchToProps)(MoviePoster);
