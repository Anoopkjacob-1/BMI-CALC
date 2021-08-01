module.exports =function(bmi){
    if(bmi===0)
    {
    return "null"
    }
    else if(bmi>=30.0)
    {
        return  "Obese";
    }
    else if(bmi<=29.0 && bmi>=25.0)
    {
        return "Overweight";
    }
    else if(bmi<=24.9 && bmi>=18.5){
        return  "Healthy";
    }
    else{
        return "Underweight";
    } 
}
