//fungsi untuk mengecek angka yang diinputkan tidak kurang dari = 0
function checkNumber(num){
    return num<=0 ? false : true
}

function checkBmi(){
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const weightError = document.getElementById("weight-error");
    const heightError = document.getElementById("height-error");
    weightError.innerHTML="";
    heightError.innerHTML="";
    if(!checkNumber(weight)){
        weightError.innerHTML="*Weight must be filled and greater than 0";
    }
    if(!checkNumber(height)){
        heightError.innerHTML="*Height must be filled and greater than 0";
    }
    if(checkNumber(weight)&& checkNumber(height)){
        const bmi = (weight/Math.pow(height/100,2)).toFixed(1);
        let status;
        if(bmi >= 30){
            status = "Obesity"
        }
        else if(bmi >= 25 && bmi <30){
            status = "Overweight"
        }
        else if(bmi >= 18.5 && bmi <25){
            status = "Normal Weight"
        }
        else{
            status = "Underweight"
        }
        document.getElementById("hasil").innerHTML = "Your BMI is <b>"+bmi+"</b> which means You are <b>"+status+"</b>";
    }
}