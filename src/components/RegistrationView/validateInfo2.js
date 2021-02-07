export default function validateInfo1(values){
    let errors=[];
    
    values.map((value,index)=>{
        let error={}

        if(!value.institute){
            error.institute='Institute Name is Required...'
        }
    
        if(!value.percentage){
            errors.percentage="Percentage is Required..."
        }
    
        if(!value.course){
            error.course="Course/Stream is Required..."
        }
    
        if(!value.start_date){
            error.start_date="Start Date Must Select"
        }
    
        if(!value.end_date){
            error.end_date="End Date Must Select"
        }
        // let date1=Date.parse(values.start_date);
        // let date2=Date.parse(values.end_date);
        console.log("DATE1:",new Date(value.start_date));
        if ((new Date(value.start_date) > new Date(value.end_date))) {
            error.end_date="Please Select Valid Date."
            // set date error validation true 
        } 
        
        errors.push(error);
    })
    console.log("ERRRR:",errors);
    return errors;
}