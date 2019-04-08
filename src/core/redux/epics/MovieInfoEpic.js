import { from } from 'rxjs';
import { switchMap, mergeMap, startWith, catchError, concat } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as types from './../actions/types';
import * as Action from './../actions/MovieInfoAction';
import { fakeAjax } from './../constants/fakeAjax'

const MovieInfoEpic = (action$, store) => {
  return action$.pipe(
    ofType(types.GET_MOVIE),
    switchMap(action => from(fakeAjax()))
    .pipe(mergeMap(
      movieData => Action.setMovie(movieData),
      startWith(Action.lodingGetMovie()),
      catchError(err => Action.failGetMovie(err)),
      concat([Action.endGetMovie()])
    ))
  )
}

export default MovieInfoEpic;