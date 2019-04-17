import * as types from './types';

/**
 * 영화 정보 가져오기
 */
export const getMovieList = (dateType) => {
  return {
    type: types.GET_MOVIE_LIST,
    dateType
  };
}

/**
 * 영화 정보 ajax 통신 시작
 */
export const lodingGetMovieList = () => {
  return {
    type: types.LODING_GET_MOVIE_LIST,
  }
}

/**
 * 영화 정보 ajax 통신 종료
 */
export const endGetMovieList = () => {
  return {
    type: types.END_GET_MOVIE_LIST,
  };
}

/**
 * 영화 정보 통신 성공
 */
export const successGetMovieList = () => {
  return {
    type: types.SUCCESS_GET_MOVIE_LIST,
  };
}

/**
 * 영화 정보 통신 실패
 */
export const failGetMovieList = (err) => {
  return {
    type: types.FAIL_GET_MOVIE_LIST,
    err,
  };
}

/**
 * 영화 정보 세팅
 */
export const setMovieList = (movieList) => {
  return {
    type: types.SET_MOVIE_LIST,
    movieList,
  }
}