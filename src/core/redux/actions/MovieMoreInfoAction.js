import * as types from './types';

/**
 * 자세한 영화 정보 가져오기
 */
export const getMoreMovieInfo = (movieData) => ({
  type: types.GET_MORE_MOVIE_INFO,
  movieData,
})

/**
 * 자세한 영화 정보 ajax 통신 시작
 */
export const lodingGetMoreMovieInfo = () => ({
  type: types.LODING_GET_MORE_MOVIE_INFO
})

/**
 * 자세한 영화 정보 ajax 통신 종료
 */
export const endGetMoreMovieInfo = () => ({
  type: types.END_GET_MORE_MOVIE_INFO
})

/**
 * 자세한 영화 정보 통신 성공
 */
export const successGetMoreMovieInfo = () => ({
  types: types.SUCCESS_GET_MORE_MOVIE_INFO
})

/**
 * 자세한 영화 정보 통신 실패
 */
export const failGetMoreMovieInfo = (err) => ({
  type: types.FAIL_GET_MORE_MOVIE_INFO,
  err
})

/**
 * 자세한 영화 정보 세팅
 */
export const setMoreMovieInfo = (data) => ({
  type: types.SET_MORE_MOVIE_INFO,
  data,
})