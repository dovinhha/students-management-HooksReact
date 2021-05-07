import { Button, Box, Avatar, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FileBase from 'react-file-base64';

import { editStudent } from '../../actions/students';

const Edit = () => {

  const student = useSelector( state => state.student);

  const [infoChange, setInforChange] = React.useState(student);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(editStudent(infoChange));
    alert('Edit Successfully.');
    setInforChange({
      id: '',
      name: '',
      age: '',
      gender: 0,
      phone: '',
      address: '',
      image: ''
    });
    history.goBack();
  }
  return (
    <>
      <Typography align='center' variant='h3' gutterBottom>
        Edit Student
      </Typography>
      <Container maxWidth='sm'>
        <form onSubmit={(e) => onSubmit(e)}>
          <Grid container spacing={3}>
            <Grid style={{justifyContent: 'center', display: 'flex'}} xs={12} item>
              <Avatar
                alt={infoChange.name}
                src={infoChange.image}
                style={{width: 150, height: 150}}
              />
            </Grid>
            <Grid xs={12} item>
              <Typography variant='h6'>
                Chosse Avatar&ensp;
                <FileBase
                  type='file'
                  multiple={false}
                  onDone={({base64}) => setInforChange({...infoChange, image: base64})}
                />
              </Typography>
            </Grid>
            <Grid xs={12} item>
              <TextField onChange={(e) => setInforChange({...infoChange, name: e.target.value})} value={infoChange.name} size='small' fullWidth label='Name' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <TextField onChange={(e) => setInforChange({...infoChange, age: parseInt(e.target.value)})} value={infoChange.age} size='small' fullWidth label='Age' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <FormControl style={{minWidth: 220}}>
                <InputLabel>Gender</InputLabel>
                <Select onChange={(e) => setInforChange({...infoChange, gender: e.target.value})} value={infoChange.gender}>
                  <MenuItem value={1}>Male</MenuItem>
                  <MenuItem value={0}>Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid xs={12} item>
              <TextField onChange={(e) => setInforChange({...infoChange, phone: e.target.value})} value={infoChange.phone} size='small' fullWidth label='Phone' variant='outlined'/>
            </Grid>
            <Grid xs={12} item>
              <TextField onChange={(e) => setInforChange({...infoChange, address: e.target.value})} value={infoChange.address} size='small' fullWidth label='Address' variant='outlined'/>
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

export default Edit
