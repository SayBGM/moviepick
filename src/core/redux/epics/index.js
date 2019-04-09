import { combineEpics } from 'redux-observable';
import MovieInfoEpic from './MovieInfoEpic';

export default combineEpics(
  MovieInfoEpic,
);