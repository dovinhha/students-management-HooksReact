import * as types from '../constants/actionTypes';

export const searchName = (key) => (dispatch) => {
  dispatch({
    type: types.SEARCH_NAME,
    payload: key
  });
}