
import React from 'react';
import { Switch, Route, useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Add from './components/AddScreen/Add';
import Edit from './components/EditScreen/Edit';
import Home from './components/HomeScreen/Home';
import View from './components/ViewScreen/View';
import { getListStudents } from './actions/students';

function App() {

  const dispatch = useDispatch();
  let location = useLocation();

  React.useEffect(() => {
    dispatch(getListStudents());
  });

  React.useEffect(() => {
    if(location.pathname !== '/edit' && location.pathname !== '/view'){
      localStorage.removeItem("student");
    }
  },[location]);

  return (
      <Switch>
        <Route path='/' exact>
          <Home/>
        </Route>  
        <Route path='/add'>
          <Add/>
        </Route>
        <Route path='/edit'>
          <Edit/>
        </Route>
        <Route path='/view'>
          <View/>
        </Route>
      </Switch>
  );
}

export default App;
