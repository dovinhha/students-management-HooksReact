import * as types from '../constants/actionTypes';

const initialState = '';

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.SEARCH_NAME:
      return action.payload;
    default:
      return state;
  }
}

export default reducer;