import * as types from '../actions/types';

const initialState = {
  movieList: [],
  loading: false,
  status: null,
}

const MovieInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MOVIE_LIST:
      return {
        ...state,
        movieList: action.movieList
      };
    case types.LODING_GET_MOVIE_LIST:
      return {
        ...state,
        loading: true
      }
    case types.END_GET_MOVIE_LIST:
      return {
        ...state,
        loading: false
      }
    case types.SUCCESS_GET_MOVIE_LIST:
      return {
        ...state,
        status: true
      }
    case types.FAIL_GET_MOVIE_LIST:
      return {
        ...state,
        status: action.err
      }
    default:
      return state;
  }
}

export default MovieInfoReducer;