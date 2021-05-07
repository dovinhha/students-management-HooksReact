import * as types from '../constants/actionTypes';

const std = JSON.parse(localStorage.getItem('student'));
const data = std !== null ? std : {};
const initialState = data;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.INFO_STUDENT:
      localStorage.setItem("student", JSON.stringify({...action.payload}));
      return {...action.payload};
    default:
      return {...state};
  }
}

export default reducer;