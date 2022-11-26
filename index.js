function promptUser(){
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




