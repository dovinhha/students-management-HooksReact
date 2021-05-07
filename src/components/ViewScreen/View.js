import { Avatar, Box, Button, Container,Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const View = () => {

  const history = useHistory();

  const student = useSelector(state => state.student);

  return (
    <Container maxWidth='sm'>
      <Typography variant='h3' align='center' style={{margin: '50px 0'}}>
        Information
      </Typography>
      <Paper style={{padding: 20, marginBottom: 50}} elevation={3}>
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Avatar
            style={{width: 150, height: 150}}
            alt={student.name}
            src={student.image}
          />
        </Box>
        <Typography gutterBottom>ID: {student.id}</Typography>
        <Typography gutterBottom>Name: {student.name} </Typography>
        <Typography gutterBottom>Age: {student.age}</Typography>
        <Typography gutterBottom>Gender: {student.gender===1 ? 'Male' : 'Female'}</Typography>
        <Typography gutterBottom>Phone: {student.phone}</Typography>
        <Typography gutterBottom>Address: {student.address}</Typography>
      </Paper>
      <Button variant='contained' onClick={() => history.goBack()}>Back</Button>
    </Container>
  )
}

export default View;
