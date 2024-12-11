let userScore= 0;;
let compscore= 0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoice= () => {
    const options=["rock", "paper", "scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}

const draw= () =>{
    console.log("It's a draw");
    msg.innerText= "The game was Draw. Play Again!!"
    msg.style.backgroundColor= "#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        console.log("You Win!");
        userScorePara.innerText= userScore;
        msg.innerText= `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "green";
    }
    else{
        compscore++;
        console.log("You Lose");
        compScorePara.innerText= compscore;
        msg.innerText= `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= "red";
    }
}

const playGame = (userChoice) => {
    console.log("User's choice= ",userChoice);
    const compChoice= genCompChoice();
    console.log("Computer's choice= ",compChoice);

    if(userChoice === compChoice){
        draw();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
           userWin= compChoice === "paper" ? false : true;

        } else if(userChoice === "paper"){
            userWin= compChoice === "scissors" ? false : true;
        }else{
            userWin= compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice);
    });
});