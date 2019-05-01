import * as types from '../actions/types';

const initialState = {
  selectMovie: null,
  loading: false,
  status: null,
};

const MovieMoreInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_MORE_MOVIE_INFO:
      return {
        ...state,
        selectMovie: action.data
      };
    case types.LODING_GET_MORE_MOVIE_INFO:
      return {
        ...state,
        loading: true
      }
    case types.END_GET_MORE_MOVIE_INFO:
      return {
        ...state,
        loading: false
      }
    case types.SUCCESS_GET_MORE_MOVIE_INFO:
      return {
        ...state,
        status: true
      }
    case types.FAIL_GET_MORE_MOVIE_INFO:
      return {
        ...state,
        status: action.err
      }
    default:
      return state;
  }
}

export default MovieMoreInfoReducer;