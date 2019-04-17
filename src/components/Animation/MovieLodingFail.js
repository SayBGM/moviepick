import React from 'react';
import Lottie from 'react-lottie';
import { FailAnimation } from '../../assets';

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: FailAnimation,
  speed: 0.5,
};

/**
 * 영화 로딩 실패시 나오는 애니메이션
 * 
 * @param {Element} children  안에 들어갈 내용
 */
const MovieLodingFail = ({children}) => (
  <div className="MoviePosterList__LodingInfo MoviePosterList__LodingInfo--fail">
    <Lottie 
      options={defaultOptions}
      height={200}
      isClickToPauseDisabled={true}
    />
    {children}
  </div>
)

export default MovieLodingFail;