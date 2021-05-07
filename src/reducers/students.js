import * as types from '../constants/actionTypes';

const stds = JSON.parse(localStorage.getItem('students'));
const data = stds !== null ? stds : [];


const initialState = data;

const reducer = (state = initialState, action) => {
  switch(action.type){
    case types.LIST_STUDENTS:
      if(state.length === 0){
        localStorage.removeItem("students");
        return [];
      }
      return [...state];
    case types.ADD:
      state.push({...action.payload, id: state.length + 1});
      localStorage.setItem("students", JSON.stringify([...state]));
      return [...state];
    case types.EDIT:
      const index1 = state.findIndex((val) =>  val.id === action.payload.id);
      // return [...state.slice(0,index1),{...action.payload},...state.slice(index1+1)];
      if(index1 !== -1){
        state[index1] = {...action.payload};
      }
      localStorage.setItem("students", JSON.stringify([...state]));
      return[...state];
    case types.DELETE:
      const index2 = state.findIndex((val) => val.id === action.payload);
      if(index2 !== -1){
        localStorage.setItem("students", JSON.stringify([...state.slice(0,index2),...state.slice(index2+1)]));
        return [...state.slice(0,index2),...state.slice(index2+1)];
      }
      return [...state];
    default:
        return [...state];
  }
}

export default reducer;