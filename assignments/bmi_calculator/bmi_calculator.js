// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    
    // Write your code here
    if (mass <= 0 || height <= 0){
        return("INVALID INPUT");
    }
    else {
        var BMI = (mass / (height * height));
        if (BMI > 0){
            return(BMI);

        }
        else{
            return("INVALID INPUT");
        }
        
    }
    

}

module.exports = BMICalculator;
