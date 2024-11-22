/* modular way of programming --> creating different functions to use ahead too. 
*/


let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#computer-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
    //rock, paper, scissors    
}

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game Draw"
    msg.style.backgroundColor = "#081b31"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Win");
        userScore++
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"
    }
    else {
        // console.log("You Lose")
        computerScore++
        computerScorePara.innerText = computerScore;
        msg.innerText = `You Lost. Your ${userChoice} beaten by ${compChoice}`
        msg.style.backgroundColor = "red"
    }
}

let playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    const compChoice = genCompChoice();
    // console.log("comp choice = ", compChoice);
    //generate computer choice 

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true
        }
        else if (userChoice = "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})
