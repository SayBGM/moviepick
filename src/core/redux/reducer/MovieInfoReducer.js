import * as types from '../actions/types';

const initState = {
  movieList: [],
  loading: false,
  status: null,
}

const MovieInfoReducer = (state = initState, action) => {
  switch (action.type) {
    // case types.SET_MOVIE:
    //   return {
    //     ...state,
    //     movieList: action.movieList,
    //   };
    // case types.LODING_GET_MOVIE:
    //   return {
    //     ...state,
    //     loading: true
    //   }
    // case types.END_GET_MOVIE:
    //   return {
    //     ...state,
    //     loading: false
    //   }
    // case types.SUCCESS_GET_MOVIE:
    //   return {
    //     ...state,
    //     status: null,
    //   }
    // case types.FAIL_GET_MOVIE:
    //   return {
    //     ...state,
    //     status: action.err
    //   };
    default:
      return state;
  }
}

export default MovieInfoReducer;