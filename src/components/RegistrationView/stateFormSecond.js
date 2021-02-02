import {useState,useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
// import useUser from '../../stateUser';
const useForm2=(validateInfo2,email)=>{
    // const [user,setUser]=useState([]);
    // const anything=useUser(ruser);
    //Method For Stepper Registration Label
    // function getSteps(){
    //     return ['Personal Information','Education Information'];
    // }
    
    const [values2,setValue2]=useState([{
        id:uuidv4(),
        institute:'',
        percentage:'',
        course:'',
        start_date:'',
        end_date:'',
    }]);

    const [mainValue,setMainValue]=useState([]);
    
    // const [activeStep,setActiveStep]=useState(1);
    // const steps=getSteps();
    const [isSubmitting2,setIsSubmitting2]=useState(false)
    const [errors2,setErrors2]=useState({
    })

    //Method For Stepper Click
    // const handleNext=()=>{
    //     setActiveStep((prevActiveStep)=>prevActiveStep+1);
    // };

    // const handleBack=()=>{
    //     setActiveStep((prevActiveStep)=>prevActiveStep-1);
    // };

    // const handleReset=()=>{
    //     setActiveStep(0);
    // };

    //Method for Input Change
    const handleChange2=(id,event)=>{
        const newInputFields=values2.map(i=>{
            if(id===i.id){
                i[event.target.name]=event.target.value
            }
            return i;
        })

        setValue2(newInputFields);


        // const {name,value}=e.target
        // console.log(e.target.value);
        // setValue2({
        //     ...values2,
        //     [name]:value
        // })
    }

    //Form Submit
    const handleSubmit2=e=>{
        console.log("Button 2 is submit...");
        e.preventDefault();
        setErrors2(validateInfo2(values2));
        setIsSubmitting2(true);
        
    }

    const handleDateChange = (date) => {
        setValue2.start_date(date)
    };
    const handleEndDateChange = (date) => {
        setValue2.end_date(date)
    };

    useEffect(()=>{
        if(Object.keys(errors2).length===0 && isSubmitting2){
           
            // handleNext();
           
        }
        console.log("USEEFFECT IS CALLED...:",email);
    },[errors2])


    //handleAddFields
    const handleAddFields=()=>{
        setValue2([...values2,{ 
        id:uuidv4(),
        institute:'',
        percentage:'',
        course:'',
        start_date:'',
        end_date:'',
        }
    ])
    }




    //For Educational Information
    
    
    return{values2,handleChange2,handleSubmit2,handleDateChange,handleEndDateChange,handleAddFields,errors2,isSubmitting2};
}

export default useForm2;