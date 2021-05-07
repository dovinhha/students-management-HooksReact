import * as types from '../constants/actionTypes';

export const getStudent = (student) => (dispatch) => {
  dispatch({
    type: types.INFO_STUDENT,
    payload: student
  });
};