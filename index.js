let secretnumber = Math.trunc(Math.random()*20)+1;
let InitialScore = 20;
let heighscore  = 0;
let number = document.querySelector(`.number`);
let score = document.querySelector(`.score`);
let check = document.querySelector(`.check`);
// let body = document.getElementsByTagName(`body`);
number.textContent = secretnumber;
check.addEventListener(`click`,function(){
    let guess = document.querySelector(`.guess`);
    let message = document.querySelector(`.message`);
    let guessnumber = guess.value;
    if(!guessnumber){
    // console.log(message);
    message.textContent = `No NUMBER!!!!!`;
    }
    else if(guessnumber==secretnumber){
    message.textContent = `COREECT NUMBER!!!!!!!`;
    document.body.style.backgroundColor = "#4DD637";
    number.style.backgroundColor = "#F7CD2E";
    number.style.width = `30rem`;
    if(InitialScore>heighscore){
        heighscore = InitialScore;
        document.querySelector(".highscore").textContent = heighscore;
    }
    }
    else if(guessnumber>secretnumber){
        if(InitialScore>1){ 
        message.textContent = `TO HEIGH`;
        InitialScore--;
        score.textContent = InitialScore;
        }else{
        message.textContent = `OOPS YOU LOOSE THE GAME DEAR!!!!!!!!`
        number.style.backgroundColor = "#E21717";
        }
    }else if(guessnumber<secretnumber){
        if(InitialScore>1){ 
        message.textContent = `TO LOW`;
        InitialScore--;
        score.textContent = InitialScore;
        }else{
        message.textContent = `OOPS YOU LOOSE THE GAME DEAR!!!!!!!!`
        number.style.backgroundColor = "#E21717";
        }

    // message.textContent = `TO LOW`;
    }
})
let again = document.querySelector(`.again`);
again.addEventListener(`click`,function(){
    secretnumber = Math.trunc(Math.random()*20)+1;
    InitialScore = 20;
    document.querySelector(`.number`).textContent = "?";
    let guess = document.querySelector(`.guess`);
    let message = document.querySelector(`.message`); 
    // let number = document.querySelector(`.number`);
    number.style.backgroundColor = "#FFFFFF";
    // number.textContent = "?";
    guess.value = " ";
    score.textContent = InitialScore;
    message.textContent = "Start guessing......";
    document.body.style.backgroundColor = "#151414";
    number.style.width = `15rem`;
})