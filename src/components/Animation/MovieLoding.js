import React from 'react';
import Lottie from 'react-lottie';
import { LodingAnimation } from '../../assets';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: LodingAnimation
};

/**
 * 영화 로딩 중일 때 나오는 애니메이션
 * 
 * @param {Element} children 안에 들어갈 내용
 */
const MovieLoding = ({children}) => (
  <div className="MoviePosterList__LodingInfo">
    <Lottie 
      options={defaultOptions}
      height={400}
      isClickToPauseDisabled={true}
    />
    {children}
  </div>
)

export default MovieLoding;