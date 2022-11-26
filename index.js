// function that calculates the grades of students with values from the prompt
function promptUser(){

    // score is a variable storing the result from the prompt
    const score = prompt("What is your score ? ", "50")
    if (score >= 0 && score <= 39){
        alert("You have scored an E")
    }else if(score >= 40 && score <= 49){
        alert("You have scored a D")
    }else if(score >= 50 && score <= 59){     
        alert("You have scored a C")
    }else if(score >= 60 && score <= 79){
        alert("You have scored a B")
    }else if(score >= 80 && score<= 100){
        alert("You have scored an A")               
    }else{
        alert("TRY AGAIN!!\n Please enter a value between 0 and 100")
    }
}

// functions that calculates demerits
function calculateDelimiter(){

    // gets value from input on html
    const speed = document.getElementById("speedBox").value

    // conditional statement to calculate demrit points
    let demerit;
    if (speed > 70){
        demerit = (speed-70)/5
        if (demerit > 12){
            demerit = "License has been suspended."
        }
    }else if(speed >= 0 && speed < 70){
        demerit = "OK"
    }else{
        demerit = "Enter a valid number"
    }

    // output text in html
    document.getElementById("answer").innerHTML = demerit
}

function salary(){
    const grossSalary = document.getElementById("salary").value
    
    let NHIF, PAYE;
    const personalRelief = 2400;

    if(grossSalary >= 0 && grossSalary <= 5999){
        NHIF = 150;
    }else if(grossSalary >= 6000 && grossSalary <= 7999){
        NHIF = 300;
    }else if(grossSalary >= 8000 && grossSalary <= 11999){
        NHIF = 400;
    }else if(grossSalary >= 12000 && grossSalary <= 14999){
        NHIF = 500;
    }else if(grossSalary >= 15000 && grossSalary <= 19999){
        NHIF = 600;
    }else if(grossSalary >= 20000 && grossSalary <= 24999){
        NHIF = 750;
    }else if(grossSalary >= 25000 && grossSalary <= 29999){
        NHIF = 850;
    }else if(grossSalary >= 30000 && grossSalary <= 34999){
        NHIF = 900;
    }else if(grossSalary >= 35000 && grossSalary <= 39999){
        NHIF = 950;
    }else if(grossSalary >= 40000 && grossSalary <= 44999){
        NHIF = 1000;
    }else if(grossSalary >= 45000 && grossSalary <= 49999){
        NHIF = 1100;
    }else if(grossSalary >= 50000 && grossSalary <= 59999){
        NHIF = 1200;
    }else if(grossSalary >= 60000 && grossSalary <= 69999){
        NHIF = 1300;
    }else if(grossSalary >= 70000 && grossSalary <= 79999){
        NHIF = 1400;
    }else if(grossSalary >= 80000 && grossSalary <= 89999){
        NHIF = 1500;
    }else if(grossSalary >= 90000 && grossSalary <= 99999){
        NHIF = 1600;
    }else if(grossSalary > 100000){
        NHIF = 1700;
    }else{
        NHIF = "Enter a valid salary"
    }

// conditional statements to calculate PAYE
    if(grossSalary >= 0 && grossSalary <= 24000){
        PAYE = (0 + (grossSalary-0) * 0.10 - personalRelief)
    }else if(grossSalary > 24000 && grossSalary <= 32333){
        PAYE = (2400 + (grossSalary-24000)*0.25 - personalRelief)
    }else if(grossSalary > 32333){
        PAYE = (4483 + (grossSalary-32333)*0.30 - personalRelief)
    }else{
        PAYE = "Enter a valid Salary"
    }

    // conditional statements to return 0 if the PAYE is below 0
        if(PAYE < 0){
            PAYE = 0;
        }

    document.getElementById("Grosssalary").innerHTML = `Gross Salary: ${grossSalary}`
    document.getElementById("NHIF").innerHTML = `NHIF: ${NHIF}`
    document.getElementById("PAYE").innerHTML = `PAYE: ${PAYE}`
}



