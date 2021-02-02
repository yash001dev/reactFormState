export default function validateInfo1(values){
    let errors={}
    
    values.map((value)=>{
        
        if(!value.institute){
            errors.institute='Institute Name is Required...'
        }
    
        if(!value.percentage){
            errors.percentage="Percentage is Required..."
        }
    
        if(!value.course){
            errors.course="Course/Stream is Required..."
        }
    
        if(!value.start_date){
            errors.start_date="Start Date Must Select"
        }
    
        if(!value.end_date){
            errors.end_date="End Date Must Select"
        }

    })
    return errors;
}