import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
  title: {
    textAlign: "center",
    margin: "50px 0",
  },
  addBtn: {
    marginBottom: 30
  },
  selectBy: {
    minWidth: "200px",
    maxWidth: "300px",
  },
  girdHeader: {
    marginTop: 50,
    marginBottom: 20,
  },
  girdBtnAdd: {
    flexGrow: 1
  },
  boxLine: {
    justifyContent: 'center', 
    display: 'flex'
  },
  line: {
    width: '70%', 
    backgroundColor: '#deb887',
    height: 3
  },
  boxFooter: {
    marginTop: 50, 
    backgroundColor: '#f8d7da', 
    borderRadius: 5
  },
  textFooter: {
    padding: 12
  }
}));