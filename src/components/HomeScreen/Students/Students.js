import React from 'react';
import { Table, TableContainer, TableCell, TableHead, TableBody, TableRow, Paper, Button} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStudent } from '../../../actions/student';
import { deleteStudent } from '../../../actions/students';
// import useStyles from './styles';

const Students = () => {
  // const classes = useStyles();
  const data = useSelector(state => state.students);
  const searchName = useSelector(state => state.searchName);
  const sortName = useSelector(state => state.sortName);

  let [students, setStudents] = React.useState([]);

  React.useEffect(() => {
    setStudents(data);
  },[data]);


  students = students.filter(val => val.name.toLowerCase().indexOf(searchName.toLowerCase()) !== -1);
  students.sort((val1, val2) => val1 < val2 ? sortName : -sortName);

  const dispatch = useDispatch();

  const onClickDelete = (e, id) => {
    e.preventDefault();
    let answer = window.confirm("Are you sure???");
    if(answer){
      dispatch(deleteStudent(id));
    }
  }

  const onClickView = (row) => dispatch(getStudent(row));
  const onClickEdit = (row) => dispatch(getStudent(row));

  return (
    <TableContainer component={Paper}>
      <Table size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.gender === 1 ? "Male" : "Male"}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="center">
                <Link style={{textDecoration: 'none'}} to='/edit'>
                  <Button onClick={() => onClickEdit(row)} variant='outlined' color='primary'>Edit</Button>
                </Link>
                &ensp;
                <Link style={{textDecoration: 'none'}} to='view'>
                  <Button onClick={() => onClickView(row)} variant='outlined'>View</Button>
                </Link>
                &ensp;
                <Button onClick={(e) => onClickDelete(e, row.id)} variant='outlined' color='secondary'>
                    Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Students
