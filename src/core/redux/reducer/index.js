import { combineReducers } from 'redux';
import MovieInfoReducer from './MovieInfoReducer';
import MovieCompareReducer from './MovieCompareReducer';
import MovieMoreInfoReducer from './MovieMoreInfoReducer';

export default combineReducers({
  MovieInfoReducer,
  MovieCompareReducer,
  MovieMoreInfoReducer,
})
