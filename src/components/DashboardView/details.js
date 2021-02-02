import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  
});


export default function Details({email}) {
  const classes = useStyles();
  const data=JSON.parse(localStorage.getItem(email));
  console.log("MAP DATA:",data);
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">School/Institute</TableCell>
            <TableCell align="right">Stream</TableCell>
            <TableCell align="right">Percentage/CGPA</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

           {data['otherDetails'].map((value,index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {data['name']}
              </TableCell>
              <TableCell align="right">{data['lname']}</TableCell>
              <TableCell align="right">{value.institute}</TableCell>
              <TableCell align="right">{value.course}</TableCell>
              <TableCell align="right">{value.percentage}</TableCell>
              <TableCell align="right">{value.start_date}</TableCell>
              <TableCell align="right">{value.end_date}</TableCell>
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  );
}