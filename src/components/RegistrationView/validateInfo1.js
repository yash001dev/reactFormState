export default function validateInfo1(values){
    let errors={}

    if(!values.name){
        errors.name='First Name is Required...'
    }

    if(!values.lname){
        errors.lname="Last Name is Required..."
    }

    if(!values.gender){
        errors.gender="You Must Select One Of Two Value"
    }

    if(!values.email){
        errors.email="Email required"
    }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }

    if(!values.number){
        errors.number="Contact Number must be required"
    }else if(!/^\d{10}$/i.test(values.number)){
        errors.number="Phone number is invalid"
    }

    if(!values.password){
        errors.password="Password should Required"
    }

    if(!values.confirmPassword){
        errors.confirmPassword="Confirm Password Should Required"
    }else if(!(values.password===values.confirmPassword)){
        errors.confirmPassword="Password should not match"
    }

    return errors;
}