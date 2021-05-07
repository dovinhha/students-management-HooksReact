import * as types from '../constants/actionTypes';

const initialState = 0;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SORT_NAME:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;