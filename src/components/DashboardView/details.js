import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteIcon from '@material-ui/icons/Delete';
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


export default function Details({email}) {


  const [open,setOpen]=useState(false);
  const [deleteOpen,setDeleteOpen]=useState(false);
  const [currentId,setCurrentId]=useState();
  const updateFire=(id)=>{
    setCurrentId(id)
    setOpen(true)
  }

  const DeleteFire=(id)=>{
    setCurrentId(id)
    setDeleteOpen(true)
  }

  const data=JSON.parse(localStorage.getItem(email));


  //Edit Part
  const [values2, setValue2] = useState([{
    id: '',
    institute: '',
    percentage: '',
    course: '',
    start_date: '',
    end_date: '',
  }]);
  const classes = useStyles();

  useEffect(() => {
    if(open){
      const data = JSON.parse(localStorage.getItem(email));
      console.log("ID:", currentId)
      const getData = data['otherDetails'].find(item => item.id == currentId);
      console.log("GETDATA:", getData);
      setValue2([{
        id: getData['id'],
        institute: getData['institute'],
        percentage: getData['percentage'],
        course: getData['course'],
        start_date: getData['start_date'],
        end_date: getData['end_date'],
      }])
  }

  }, [open])

  const handleChange2 = (id, event) => {
    console.log("VALUES2:", values2);
    const newInputFields = values2.map(i => {
      if (id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })

    setValue2(newInputFields);
  }


  const deleteHandleClickClose=()=>{
    setDeleteOpen(false);
  }


  function handleClose() {
    console.log("Navigation Close...");
    setOpen(false);
  }
  
  const handleEdit = (email, id) => {
    console.log("HANDLE EDIT IS CALLED:", email)
    let data = JSON.parse(localStorage.getItem(email));
    console.log("DATAA:", data);
    let result = data['otherDetails'].map(item => {
      return item.id == id ? values2[0] : item
    })
    data['otherDetails'] = result;
    localStorage.setItem(email, JSON.stringify(data));
    handleClose();
  }

  
  const handleDelete=(email,id)=>{
    console.log("Handle Delete is Called:",email)
    let data=JSON.parse(localStorage.getItem(email));
    console.log("DATAA:",data);
    let result=data['otherDetails'].filter(item=>{
      return item.id!=id
    })
    data['otherDetails']=result;
    localStorage.setItem(email,JSON.stringify(data));
    deleteHandleClickClose();
  }

  //End Edit Part

  //Start Delete Part


  //End Delete Part




  // const classes = useStyles();
  
  return (
    <>
      {console.log("ISOPEN IS CALLED:", open)}
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Education</DialogTitle>
        {/* <form onSubmit={()=>console.log("Form Submitted")} noValidate> */}
        <DialogContent>
          <DialogContentText>
            Edit Education Your Requirements
        </DialogContentText>


          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Institute"
                margin="normal"
                name="institute"
                type="text"
                // error={errors2.institute && true}
                // helperText={errors2.institute && errors2.institute}
                value={values2[0].institute}
                onChange={event => handleChange2(values2[0].id, event)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Percentage/CGPA"
                margin="normal"
                name="percentage"
                // error={errors2.percentage && true}
                // helperText={errors2.percentage && errors2.percentage}
                type="text"
                variant="outlined"
                value={values2[0].percentage}
                onChange={event => handleChange2(values2[0].id, event)}
              />
            </Grid>


            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Course/Stream"
                margin="normal"
                name="course"

                type="text"
                variant="outlined"
                value={values2[0].course}
                onChange={event => handleChange2(values2[0].id, event)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                id="date"
                label="Start Date"
                type="date"
                name="start_date"
                defaultValue="2017-05-24"
                value={values2[0].start_date}
                onChange={event => handleChange2(values2[0].id, event)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              // error={errors2.start_date && true}
              // helperText={errors2.start_date && errors2.start_date}
              />
            </Grid>

            <Grid item xs={12} sm={6}>

              <TextField
                fullWidth
                margin="normal"
                variant="outlined"
                id="date"
                label="End Date"
                type="date"
                name="end_date"
                defaultValue="2017-05-24"
                value={values2[0].end_date}
                onChange={event => handleChange2(values2[0].id, event)}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}

              />
            </Grid>


          </Grid>
        </DialogContent>
        <Button onClick={() => handleEdit(email, currentId)} type="submit" color="primary">
          Submit
      </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
        {/* </form> */}
      </Dialog>
    
    {/* {open?<EditEducation email={email} open={open} id={currentId}/>:null} */}

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
            <TableCell align="right">Operations</TableCell>
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
              <TableCell>
                <IconButton onClick={()=>updateFire(value.id)} color="primary">
                        <UpdateIcon/>
                </IconButton> 
                <IconButton onClick={()=>DeleteFire(value.id)} color="primary">
                        <DeleteIcon/>
                </IconButton>
              </TableCell>
              
            </TableRow>
          ))}
         
        </TableBody>
      </Table>
    </TableContainer>


    <Dialog
        open={deleteOpen}
        onClose={deleteHandleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are You Sure You Want to Delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>deleteHandleClickClose} color="primary">
            Cancel
          </Button>
          <Button onClick={()=>handleDelete(email,currentId)} color="primary">
            Delete
          </Button>  
        </DialogActions>
      </Dialog>

    </>
  );

  
  //Edit Part
  


}