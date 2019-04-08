import * as types from './types';

/**
 * 영화 정보 가져오기
 */
export const getMovie = () => {
  return {
    type: types.GET_MOVIE,
  };
}

/**
 * 영화 정보 ajax 통신 시작
 */
export const lodingGetMovie = () => {
  return {
    type: types.LODING_GET_MOVIE,
  }
}

/**
 * 영화 정보 ajax 통신 종료
 */
export const endGetMovie = () => {
  return {
    type: types.END_GET_MOVIE,
  };
}

/**
 * 영화 정보 통신 성공
 */
export const successGetMovie = () => {
  return {
    type: types.SUCCESS_GET_MOVIE,
  };
}

/**
 * 영화 정보 통신 실패
 */
export const failGetMovie = (err) => {
  return {
    type: types.FAIL_GET_MOVIE,
    err,
  };
}

/**
 * 영화 정보 세팅
 */
export const setMovie = (movieList) => {
  return {
    type: types.SET_MOVIE,
    movieList,
  }
}