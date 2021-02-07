export default function validateInfo1(values){
    let errors={}
    if(!values.email){
        errors.email="Email required"
    }else if(!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(values.email)){
        errors.email="Email address is invalid"
    }
    
    
    if(!values.password){
        errors.password="Password should Required"
    }

    
    return errors;
}