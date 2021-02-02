import {useState,useEffect} from 'react';
import useUser from '../../stateUser';
import { useHistory } from "react-router-dom";

const useForm=(validateInfo1)=>{
    const [user,setUser]=useState([]);
    
    // const anything=useUser(ruser);
    //Method For Stepper Registration Label
    function getSteps(){
        return ['Personal Information','Education Information'];
    }
    
    const [values,setValue]=useState({
        id:'',
        name:'',
        lname:'',
        gender:'',
        email:'',
        number:'',
        password:'',
        confirmPassword:'',
        isLogged:false,
    });

    

    const [activeStep,setActiveStep]=useState(1);
    const steps=getSteps();
    const [isSubmitting,setIsSubmitting]=useState(false)
    const [errors,setErrors]=useState({
    })

    //Method For Stepper Click
    const handleNext=()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep+1);
    };

    const handleBack=()=>{
        setActiveStep((prevActiveStep)=>prevActiveStep-1);
    };

    const handleReset=()=>{
        setActiveStep(0);
    };

    //Method for Input Change
    const handleChange=e=>{
        const {name,value}=e.target
        setValue({
            ...values,
            [name]:value
        })
    }

    //Form Submit
    const handleSubmit=e=>{
        e.preventDefault();
        setErrors(validateInfo1(values));
        setIsSubmitting(true);
        
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            values.id=Math.random()
            setUser([...user,values])
            // localStorage.setItem(values.email,JSON.stringify(values));
            handleNext();
           
        }
    },[errors])



    //For Educational Information
    
    
    return{values,activeStep,steps,handleNext,handleBack,handleReset,handleChange,handleSubmit,errors,user};
}

export default useForm;