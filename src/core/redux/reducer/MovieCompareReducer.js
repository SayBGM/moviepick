import * as types from '../actions/types';

const initialState = {
  compareList: [],
  compareMsg: null
}

const MovieCompareReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.IN_COMPARE_MOVIE:
    return state.compareList.length === 6 ? {
      ...state,
      compareMsg: '더이상 비교할 수 없습니다.'
    } : {
      ...state,
      compareList: [...state.compareList, action.data]
    }
    case types.OUT_COMPARE_MOVIE:
      return {
        ...state,
        compareList: [...state.compareList.slice(0, action.index), ...state.compareList.slice(action.index+1)],
        compareMsg: null,
      }
    default:
      return state;
  }
}

export default MovieCompareReducer;
