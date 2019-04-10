import { combineReducers } from 'redux';
import MovieInfoReducer from './MovieInfoReducer';
import MovieCompareReducer from './MovieCompareReducer';

export default combineReducers({
  MovieInfoReducer,
  MovieCompareReducer,
})
