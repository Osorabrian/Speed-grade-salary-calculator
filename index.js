// function that calculates the grades of students with values from the prompt
function promptUser(){
    // score is a variable storing the result from the prompt
    const score = prompt("What is your score ? ", "50")
    if (score >= 0 && score <= 39){
        alert("You have scored an E")
    }else if(score >= 40 && score <= 49){
        alert("Tou have scored a D")
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

function calculateDelimiter(){
    const speed = document.getElementById("speedBox").value
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

    document.getElementById("answer").innerHTML = demerit
}



