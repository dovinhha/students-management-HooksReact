import React from 'react';
import { Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Grid, Box } from '@material-ui/core';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import Students from './Students/Students';
import { searchName } from '../../actions/searchName';
import { sortName } from '../../actions/sortName';

const Home = () => {

  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = React.useState('');
  const [sort, setSort] = React.useState(0);

  const onChangeSearchName = (e) => {
    setName(e.target.value);
    dispatch(searchName(e.target.value));
  };

  const onChangeSortName = (e) => {
    setSort(e.target.value);
    dispatch(sortName(e.target.value))
  };
  return (
    <Container maxWidth='lg'>
      <Typography className={classes.title} variant='h3'>
        Student Management
      </Typography>
      <Box className={classes.boxLine}>
        <Box className={classes.line}/>
      </Box>
      <Grid className={classes.girdHeader} container spacing={2}>
        <Grid sm={6} xs={12} item>
          <Link style={{textDecoration: 'none'}} to='/add'>
            <Button variant="contained" color="primary" className={classes.addBtn} >
              <AddCircleOutlinedIcon/>
              Add student
            </Button>
          </Link>
        </Grid>
        <Grid sm={3} xs={12} item>
          <TextField value={name} onChange={(e) => onChangeSearchName(e)} fullWidth label='Search Name'/>
        </Grid>
        <Grid sm={3} xs={12} item>
          <FormControl className={classes.selectBy}>
            <InputLabel>
              Sort By
            </InputLabel> 
            <Select onChange={(e) => onChangeSortName(e)} value={sort}>
              <MenuItem value={0}>Name A-Z</MenuItem>
              <MenuItem value={1}>Name Z-A</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Students/>
      <Box className={classes.boxFooter}>
        <Box>
          <Typography className={classes.textFooter} align='right' variant='subtitle2'>
            by Do Vinh Ha
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default Home;
