import {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import useUser from '../../stateUser';

const useLogin=(validateInfo1,user)=>{
    const [user2,setUser2]=useState([]);
    const history = useHistory();
    // const anything=useUser(ruser);
    //Method For Stepper Registration Label
    function getSteps(){
        return ['Personal Information','Education Information'];
    }
    
    const [values,setValue]=useState({
        email:'',
        password:'',
    });

    const [isSubmitting,setIsSubmitting]=useState(false)
    const [errors,setErrors]=useState({
    })

   
    const handleChange=e=>{
        const {name,value}=e.target
        setValue({
            ...values,
            [name]:value
        })
    }

    //Form Submit
    const handleSubmit=e=>{
        console.log("Button is submit...");
        e.preventDefault();
        setErrors(validateInfo1(values));
        setIsSubmitting(true);
    }

    useEffect(()=>{
        if(Object.keys(errors).length===0 && isSubmitting){
            console.log("HELLO");
            const data=JSON.parse(localStorage.getItem(values.email));
            console.log("DATA:",data);
            if(data && data.email==values.email && data.password==values.password){
                console.log("Login Successfull...");
                // localStorage.setItem('isLogged',true);
                data['isLogged']=true
                let email=data['email'];
                localStorage.setItem(email,JSON.stringify(data))
                let link=`/dashboard/${email}`
                history.push(link);
            }
            console.log("Wrong Information...");
        }   
        console.log("USEEFFECT IS CALLED...:",user);
    },[errors])
    
    return{values,handleChange,handleSubmit,errors};
}

export default useLogin;