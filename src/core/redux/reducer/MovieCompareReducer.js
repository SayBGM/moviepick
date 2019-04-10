import * as types from '../actions/types';

const initialState = {
  compareList: []
}

const MovieCompareReducer = (state = initialState, action) => {
  const tempList = state.compareList;
  switch (action.type) {
    case types.IN_COMPARE_MOVIE:
      tempList.push(action.data);
      return {
        ...state,
        compareList: tempList
      }
    case types.OUT_COMPARE_MOVIE:
      tempList.pop(action.index);
      return {
        ...state,
        compareList: tempList 
      }
    default:
      return state;
  }
}

export default MovieCompareReducer;