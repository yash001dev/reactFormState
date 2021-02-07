import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Grid,
 
  DialogTitle,
  DialogContentText,
  DialogContent,
  Dialog,
  DialogActions,
} from '@material-ui/core';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Education({email}) {
  const [open,setOpen]=useState(false);
  const classes = useStyles();
  const data=JSON.parse(localStorage.getItem(email));
  const [currentPasswordValue,setCurrentPasswordValue]=useState('');

  const handleClose=()=>{
    setOpen(false)
  }

  const handleChangePassword=()=>{
    data['password']=currentPasswordValue;
    data['confirmPassword']=currentPasswordValue;
    localStorage.setItem(email,JSON.stringify(data));
    handleClose();
  }


  return (
    <>

<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
        {/* <form onSubmit={()=>console.log("Form Submitted")} noValidate> */}
        <DialogContent>
          <DialogContentText>
            Edit Password According Your Requirements
        </DialogContentText>


          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                type="text"
                value={currentPasswordValue}
                onChange={event =>setCurrentPasswordValue(event.target.value) }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <Button onClick={handleChangePassword} type="submit" color="primary">
          Submit
      </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
        {/* </form> */}
      </Dialog>
    





    <TableContainer component={Paper}>
      
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          
            <TableRow key={data['name']}>
              <TableCell component="th" scope="row">
                {data['name']}
              </TableCell>
              <TableCell align="right">{data['lname']}</TableCell>
              <TableCell align="right">{data['gender']}</TableCell>
              <TableCell align="right">{data['email']}</TableCell>
              <TableCell align="right">{data['number']}</TableCell>
            </TableRow>
         
        </TableBody>
      </Table>
    </TableContainer>
      <Button onClick={() => setOpen(true)} type="submit" color="primary">
          Change Password
      </Button>
  </>   
  );
}