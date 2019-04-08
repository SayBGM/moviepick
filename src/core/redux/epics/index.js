import { merge } from 'rxjs';
import MovieInfoEpic from './MovieInfoEpic';

export default (action$, store) => merge(
  MovieInfoEpic,
);