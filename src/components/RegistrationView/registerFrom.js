import React, { useState, useEffect } from 'react'
import useForm from './stateForm';
import {
  InputLabel,
  Button,
  Select,
  TextField,
  MenuItem,
  makeStyles,

} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
// import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { Link, NavLink } from 'react-router-dom';
import LoginInfoForm from '../../components/LoginView/logininfoform';
import validateInfo1 from './validateInfo1';
import validateInfo2 from './validateInfo2';
import useForm2 from './stateFormSecond';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControlLabel, Container, CssBaseline } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
//Cutomized css classes

//End css Classes
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function getSteps() {
  return ['Select master blaster campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}


function RegisterFrom() {
  const history = useHistory();


  const { values, activeStep, steps, handleNext, handleBack, handleReset, errors, handleChange, handleSubmit } = useForm(validateInfo1);
  const { values2, handleChange2, handleAddFields, handleDateChange, handleEndDateChange, handleSubmit2, errors2, isSubmitting2,changeIsSubmitting } = useForm2(validateInfo2, values.email);
  const classes = useStyles();


  useEffect(() => {

    let someData;
    someData=errors2.filter(item=>Object.keys(item).length>=1)

    console.log("SOMEDATA:",someData)
    if (someData.length==0 && isSubmitting2) {

      let mainData = Object.assign(values)
      mainData['otherDetails'] = Object.assign(values2);
      localStorage.setItem(values.email, JSON.stringify(mainData));
      history.push('/');
      changeIsSubmitting();
    }
    // handleNext()
  }, [isSubmitting2])


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>


        {activeStep === 1 ? (
          <Container component="main" maxwidth="xs">
            <CssBaseline />
            <Typography component="h1" variant="h5">
              Sign up:Step 1
          </Typography>
            <form className={classes.form} noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Name"
                    margin="normal"
                    name="name"
                    type="text"
                    error={errors.name && true}
                    helperText={errors.name && errors.name}
                    variant="outlined"
                    value={values.name}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    margin="normal"
                    name="lname"
                    error={errors.lname && true}
                    helperText={errors.lname && errors.lname}
                    type="text"
                    variant="outlined"
                    value={values.lname}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <InputLabel id="select-label">Select Gender</InputLabel>
                  <Select
                    id="gender-field"
                    value={values.variable_id}
                    onChange={handleChange}
                    error={errors.gender && true}
                    helperText={errors.gender && errors.gender}
                    margin="normal"
                    fullWidth
                    name="gender"
                  >
                    <MenuItem value={'Male'}>Male</MenuItem>
                    <MenuItem value={'Female'}>Female</MenuItem>

                  </Select>
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Email"
                    margin="normal"
                    name="email"
                    type="email"
                    variant="outlined"
                    error={errors.email && true}
                    helperText={errors.email && errors.email}
                    value={values.email}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Contact Number"
                    margin="normal"
                    name="number"
                    type="text"
                    error={errors.number && true}
                    helperText={errors.number && errors.number}
                    variant="outlined"
                    value={values.number}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Password"
                    margin="normal"
                    name="password"
                    error={errors.password && true}
                    helperText={errors.password && errors.password}
                    type="text"
                    variant="outlined"
                    type="password"
                    value={values.password}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Enter Confirm Password"
                    margin="normal"
                    error={errors.confirmPassword && true}
                    helperText={errors.confirmPassword && errors.confirmPassword}
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                </Grid>


                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.submit}
                >
                  Submit
                      </Button>

              </Grid>
            </form>
          </Container>
        ) : (

          
          <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Typography component="h1" variant="h5">
              Sign up:Step 2
            </Typography>
            
                  <form className={classes.form} noValidate onSubmit={handleSubmit2}>
                   
                    {values2.map((values2,index)=>{
                      return <Grid container spacing={2}>
                      
                      
                      <Grid item xs={12}>   
                      <TextField
                        fullWidth
                        label="Institute"
                        margin="normal"
                        name="institute"
                        type="text"
                        error={errors2[index]?errors2[index].institute && true:false}
                        helperText={errors2[index]?errors2[index].institute && errors2[index].institute:null}
                        value={values2.institute}
                        onChange={event => handleChange2(values2.id, event)}
                      />
                      </Grid>

                      <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Percentage/CGPA"
                        margin="normal"
                        name="percentage"
                        error={errors2[index]?errors2[index].percentage && true:false}
                        helperText={errors2[index]?errors2[index].percentage && errors2[index].percentage:null}
                        type="text"
                        variant="outlined"
                        value={values2.percentage}
                        onChange={event => handleChange2(values2.id, event)}
                      />
                      </Grid>


                      <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Course/Stream"
                        margin="normal"
                        name="course"
                        error={errors2[index]?errors2[index].course && true:false}
                        helperText={errors2[index]?errors2[index].course && errors2[index].course:null}
                        type="text"
                        variant="outlined"
                        value={values2.course}
                        onChange={event => handleChange2(values2.id, event)}
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
                            value={values2.start_date}
                            onChange={event => handleChange2(values2.id, event)}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            error={errors2[index]?errors2[index].start_date && true:false}
                            helperText={errors2[index]?errors2[index].start_date && errors2[index].start_date:null}
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
                            value={values2.end_date}
                            onChange={event => handleChange2(values2.id, event)}
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true,
                            }}
                            error={errors2[index]?errors2[index].end_date && true:false}
                            helperText={errors2[index]?errors2[index].end_date && errors2[index].end_date:null}

                    />
                    </Grid>
                    
                  
                </Grid>
                    })}
                    <Button variant="contained" color="primary" type="submit" color="primary">
                      Submit
                    </Button>
                   
                  </form>
               
                  
              
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                   
              </Button>
              <IconButton
                    onClick={handleAddFields}>
                      <AddIcon />
                  </IconButton>
                <Link to="/">
                  {"Go To Login"}
                </Link>
              
            
            </Container>
          )
          }
        {handleNext == 3 ? <LoginInfoForm /> : null}
      </div>
    </div>
  )
}

export default RegisterFrom
