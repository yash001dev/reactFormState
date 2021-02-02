import React, { useState, useEffect} from 'react'
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
import { Link } from 'react-router-dom';
import LoginInfoForm from '../../components/LoginView/logininfoform';
import validateInfo1 from './validateInfo1';
import validateInfo2 from './validateInfo2';
import useForm2 from './stateFormSecond';
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
  const { values2, handleChange2,handleAddFields,handleDateChange, handleEndDateChange, handleSubmit2, errors2,isSubmitting2 } = useForm2(validateInfo2, values.email);
  const classes = useStyles();


  useEffect(()=>{
      if(Object.keys(errors2).length===0 && isSubmitting2){
        console.log("NO ERROR...");
        console.log("DATA1:",values);
      console.log("DATA2:",values2);
      let mainData=Object.assign(values)
      mainData['otherDetails']=Object.assign(values2);
      console.log("MAINDATA:",mainData);
        localStorage.setItem(values.email,JSON.stringify(mainData));
        history.push('/');
      }
     // handleNext()
  },[isSubmitting2])


  return (

    <div className={classes.root}>
      {console.log("ACTIVESTEP:", activeStep)}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        

        {activeStep === 1 ? (
          <div>
            <div>
              <form noValidate onSubmit={handleSubmit}>

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


                <Button type="submit" color="primary">
                  Submit
        </Button>


              </form>
            </div>
          </div>
        ) : (
            <div>
              <div>
                <div>
                  <form noValidate onSubmit={handleSubmit2}>
                    
                    {values2.map(values2=>{
                      return <div key={values2.id}>
                      {console.log("INITITAL STATE:",values2)}
                      <TextField
                        fullWidth
                        label="Institute"
                        margin="normal"
                        name="institute"
                        type="text"
                        error={errors2.institute && true}
                        helperText={errors2.institute && errors2.institute}
                        variant="outlined"
                        value={values2.institute}
                        onChange={event => handleChange2(values2.id, event)}
                      />
                      <TextField
                        fullWidth
                        label="Percentage/CGPA"
                        margin="normal"
                        name="percentage"
                        error={errors2.percentage && true}
                        helperText={errors2.percentage && errors2.percentage}
                        type="text"
                        variant="outlined"
                        value={values2.percentage}
                        onChange={event => handleChange2(values2.id, event)}
                      />

                      <TextField
                        fullWidth
                        label="Course/Stream"
                        margin="normal"
                        name="course"
                        error={errors2.course && true}
                        helperText={errors2.course && errors2.course}
                        type="text"
                        variant="outlined"
                        value={values2.course}
                        onChange={event => handleChange2(values2.id, event)}
                      />


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
                    />

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
                    />
                    
                  </div>
                    })}
                    <Button variant="contained" color="primary" type="submit" color="primary">
                      Submit
                    </Button>
                  </form>
                </div>
              </div>

              <div>
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
              </div>
            </div>
          )}
        {handleNext == 3 ? <LoginInfoForm /> : null}
      </div>
    </div>
  )
}

export default RegisterFrom
