import { combineReducers } from 'redux';

import students from './students';
import student from './student';
import searchName from './searchName';
import sortName from './sortName';

export default combineReducers({
  students,
  student,
  searchName,
  sortName
});