import { combineEpics } from "redux-observable";
import MovieInfoEpic from "./MovieInfoEpic";
import MovieMoreInfoEpic from "./MovieMoreInfoEpic";

export default combineEpics(MovieInfoEpic, MovieMoreInfoEpic);
