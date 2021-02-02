export default function validateInfo1(values){
    
    let id;
    let errorArray=[];
    values.map((value)=>{
        let errors={}
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
        errorArray.push(errors);
    })
    console.log("TOTAL ERROR:",errorArray);
    
}