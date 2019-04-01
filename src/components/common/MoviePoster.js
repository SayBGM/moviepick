import React, { useState } from 'react';
import classNames from 'classnames';
import {Compare} from '../../assets';

import './MoviePoster.scss';

/**
 * 영화 포스터 컴포넌트
 * @param {String} type 값은 main 혹은 select로 이루어져 있으며 추후 늘어날 수 있음
 * @param {String} imgSrc 이미지 경로
 * @param {Object} info 영화 정보
 */
const MoviePoster = ({type, imgSrc, info}) => {
  const [ isShow, setShow ] = useState(false);
  const { ranking, }
  return (
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
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
    <img src={imgSrc} style={{width:'100%'}}/>
        {
          type === 'main' ? 
          <div className={
            classNames('MoviePoster--compareBtn', {
              'MoviePoster--compareBtn--blind': !isShow
            })
            }>
            <Compare width="18px" height="18px"/>
          </div> :
          <div className="MoviePoster--delete">
            𝘅
          </div>
        }
    </div>
  )
}

export default MoviePoster;
