let humanCount = document.getElementById("human-count"); 
let aiCount = document.getElementById("ai-count"); 

let humanScore = 0;
let aiScore = 0;

let humanChoice = document.getElementById("human-choice");
let aiChoice = document.getElementById("ai-choice"); 

let result = document.getElementById("result-el"); 

let gameEl = document.getElementById("game-el"); 

let rockEl = document.getElementById("rock-el");
let paperEl = document.getElementById("paper-el");
let scissorsEl = document.getElementById("scissors-el");
let resetEl = document.getElementById("reset-el");

let compare = ["Rock", "Paper", "Scissors"];

let totalCount = document.getElementById("total-game-count");

let count = 0;

function setResultState(stateClass){
    result.classList.remove("win", "lose", "draw");
    if(stateClass){
        result.classList.add(stateClass);
    }
}

function random(){
    let randomIndex = Math.floor(Math.random() * 3);
    return randomIndex;
}

function aiscore(){
    aiScore++;
    aiCount.textContent = aiScore;
}

function humanscore(){
    humanScore++;
    humanCount.textContent = humanScore;
}

function rock(){
    count++;
    totalCount.textContent = count;
    gameEl.textContent = "Round " + count;
    humanChoice.textContent = "Rock";
    aiChoice.textContent = compare[random()];
    if(aiChoice.textContent === "Paper"){
        humanscore()
        result.textContent = "WIN";
        setResultState("win");
    }
    else if(aiChoice.textContent === "Rock"){
        result.textContent = "DRAW";
        setResultState("draw");
    }
    else{
        result.textContent = "You Lose";
        aiscore();
        setResultState("lose");
    }
}

function paper(){
    count++;
    totalCount.textContent = count;
    gameEl.textContent = "Round " + count;
    humanChoice.textContent = "Paper";
    aiChoice.textContent = compare[random()];
    if(aiChoice.textContent === "Rock"){
        result.textContent = "WIN";
        humanscore()
        setResultState("win");
        
    }
    else if(aiChoice.textContent === "Paper"){
        result.textContent = "DRAW";
        setResultState("draw");
    }
    else{
        result.textContent = "You Lose";
       aiscore();
       setResultState("lose");
    }
}

function scissors(){
    count++;
    totalCount.textContent = count;
    gameEl.textContent = "Round " + count;
    humanChoice.textContent = "Scissors";
    aiChoice.textContent = compare[random()];
    if(aiChoice.textContent === "Rock"){
        result.textContent = "WIN";
       humanscore()
       setResultState("win");
    }
    else if(aiChoice.textContent === "Scissors"){
        result.textContent = "DRAW";
        setResultState("draw");
    }
    else{
        result.textContent = "You Lose";
        aiscore();
        setResultState("lose");
    }
}


function reset(){
    count = 0;
    humanScore = 0;
    aiScore = 0;
    humanCount.textContent = 0;
    aiCount.textContent = 0;
    humanChoice.textContent = "-";
    aiChoice.textContent = "-";
    totalCount.textContent = count;
    gameEl.textContent = "Start Game";
    result.textContent = "Make your first move.";
    setResultState();
}
