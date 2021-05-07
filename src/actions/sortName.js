import * as types from '../constants/actionTypes';

export const sortName = (value) => (dispatch) => {
  dispatch({
    type: types.SORT_NAME,
    payload: value
  });
}