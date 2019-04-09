import { from } from 'rxjs';
import { switchMap, mergeMap, startWith, catchError, concat } from 'rxjs/operators';
import { ofType } from 'redux-observable';

import * as types from './../actions/types';
import * as Action from './../actions/MovieInfoAction';
import { fakeAjax } from './../constants/fakeAjax'

export default function MovieInfoEpic (action$, store) {
  return action$.pipe(
    ofType(types.GET_MOVIE_LIST),
    switchMap(action => from(fakeAjax())
      .pipe(
        mergeMap(
          data => [Action.setMovieList(data), Action.successGetMovieList()]),
        startWith(Action.lodingGetMovieList()),
        catchError(err => [Action.failGetMovieList(err)]),
        concat([Action.endGetMovieList()])
      )
    )
  )
}