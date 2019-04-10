import * as types from './types';

export const inCompareMovie = (data) => ({
  type: types.IN_COMPARE_MOVIE,
  data,
})

export const outCompareMovie = (index) => ({
  type: types.OUT_COMPARE_MOVIE,
  index,
})