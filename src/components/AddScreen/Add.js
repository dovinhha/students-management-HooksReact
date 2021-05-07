import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';

import { addStudent } from '../../actions/students';

const Add = () => {

  const history = useHistory();

  const dispatch = useDispatch();

  const [student,setStudent] = React.useState({
    id: '',
    name: '',
    age: '',
    gender: 0,
    phone: '',
    address: '',
    image: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent(student)); 
    alert("Add succesfully");
    setStudent({
      id: '',
      name: '',
      age: '',
      gender: 0,
      phone: '',
      address: '',
      image: ''
    })
  }

  return (
    <>
      <Typography align='center' variant='h3' gutterBottom>
        Add Student
      </Typography>
      <Container maxWidth='sm'>
        <form onSubmit={(e)=> onSubmit(e)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant='h6'>
                Choose Avatar&ensp;
                <FileBase
                  multiple={false}
                  type='file'
                  onDone={({base64}) => setStudent({...student, image: base64})}
                />
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <TextField value={student.name} onChange={(e) => setStudent({...student, name: e.target.value})} size='small' fullWidth label='Name' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <TextField value={student.age} onChange={(e) => setStudent({...student, age: parseInt(e.target.value)})} size='small' fullWidth label='Age' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <FormControl style={{minWidth: 220}}>
                <InputLabel>Gender</InputLabel>
                <Select onChange={(e) => setStudent({...student, gender:e.target.value})} value={student.gender}>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={0}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <TextField value={student.phone} onChange={(e) => setStudent({...student, phone: e.target.value})} size='small' fullWidth label='Phone' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <TextField value={student.address} onChange={(e) => setStudent({...student, address: e.target.value})} size='small' fullWidth label='Address' variant='outlined'/>
            </Grid>
          </Grid>
          <Box style={{marginTop: 50}}>
            <Button type='submit' variant="contained" color="primary">Submit</Button>&ensp;
            <Button onClick={() => history.goBack()} variant="contained">Back</Button>
          </Box>
        </form>
      </Container>
    </>
  )
}

export default Add;
