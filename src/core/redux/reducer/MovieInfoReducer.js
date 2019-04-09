import * as types from '../actions/types';

const initialState = {
  movieList: [],
  loading: false,
  status: null,
}

const MovieInfoReducer = (state = initialState, action) => {
  const temp = state;
  switch (action.type) {
    case types.SET_MOVIE_LIST:
      temp.movieList = action.movieList;
      return temp;
    case types.LODING_GET_MOVIE_LIST:
      temp.loading = true;
      return temp;
    case types.END_GET_MOVIE_LIST:
      temp.loading = false;
      return temp;
    case types.SUCCESS_GET_MOVIE_LIST:
      temp.status = null;
      return temp;
    case types.FAIL_GET_MOVIE_LIST:
      temp.status = action.err
      return temp;
    default:
      return state;
  }
}

export default MovieInfoReducer;