import * as types from '../constants/actionTypes';

export const getListStudents = () => (dispatch) => {
  dispatch({
    type: types.LIST_STUDENTS
  })
}

export const addStudent = (student) => (dispatch) => {
  dispatch({
    type: types.ADD,
    payload: student
  });
}

export const editStudent = (student) => (dispatch) => {
  dispatch({
    type: types.EDIT,
    payload: student
  });
}

export const deleteStudent = (id) => (dispatch) => {
  dispatch({
    type: types.DELETE,
    payload: id
  });
}