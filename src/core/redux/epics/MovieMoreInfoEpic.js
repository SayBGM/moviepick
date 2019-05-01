import { from } from "rxjs";
import {
  switchMap,
  mergeMap,
  startWith,
  catchError,
  concat
} from "rxjs/operators";
import { ofType } from "redux-observable";

import * as types from "./../actions/types";
import * as Action from "./../actions/MovieMoreInfoAction";
import { fakeMovieInfoAjax } from "./../constants/fakeAjax";

export default function MovieInfoEpic(action$, store) {
  return action$.pipe(
    ofType(types.GET_MORE_MOVIE_INFO),
    switchMap(action =>
      from(fakeMovieInfoAjax(action.data)).pipe(
        mergeMap(data => [
          Action.setMoreMovieInfo(data),
          Action.successGetMoreMovieInfo()
        ]),
        startWith(Action.lodingGetMoreMovieInfo()),
        catchError(err => [Action.failGetMoreMovieInfo(err)]),
        concat([Action.endGetMoreMovieInfo()])
      )
    )
  );
}
