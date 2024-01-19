const div1 = document.querySelector('#div1')
const div2 = document.querySelector('#div2')
const div3 = document.querySelector('#div3')
const p1 = document.createElement('p')
const p2 = document.createElement('p')

const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')

// get user choice
let getUserChoice = (choice) => {
    let userChoice = choice.toLowerCase()
    return userChoice
}

// get computer choice
let getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"]
    let randomIndex = Math.floor(Math.random() * options.length)
    let computerChoice = options[randomIndex]
    return computerChoice
}


// helper functions 
let isPaper = (choice) => {
    return (choice === "paper")
}

let isRock = (choice) => {
    return (choice === "rock")
}

let isScissors = (choice) => {
    return (choice === "scissors")
}

// play game
let playGame = (playerSelection, computerSelection) => {
    // compare the choices

    if (isPaper(playerSelection)) {
        if (isScissors(computerSelection)) {
            console.log("Scissors beat paper.")
            div2.textContent = "Computer chose scissors. Scissors beat paper."
            computerScore++
        }

        else if (isRock(computerSelection)) {
            console.log("Paper beats rock.")
            div2.textContent = "Computer chose rock. Paper beats rock."
            userScore++
        }

        else {
            console.log("It's a draw.")
            div2.textContent = "Computer chose paper. It's a draw."
        }
    }

    else if (isRock(playerSelection)) {
        if (isScissors(computerSelection)) {
            console.log("Rock beats scissors.")
            div2.textContent = "Computer chose scissors. Rock beats scissors."
            userScore++
        }

        else if (isPaper(computerSelection)) {
            console.log("Paper beats rock.")
            div2.textContent = "Computer chose paper. Paper beats rock."
            computerScore++
        }

        else {
            console.log("It's a draw.")
            div2.textContent = "Computer chose rock. It's a draw."
        }

    }

    // scissors
    else {
        if (isPaper(computerSelection)) {
            console.log("Scissors beats paper.")
            div2.textContent = "Computer chose paper. Scissors beats paper."
            userScore++
        }

        else if (isRock(computerSelection)) {
            console.log("Rock beats scissors.")
            div2.textContent = "Computer chose rock. Rock beats scissors."
            computerScore++
        }

        else {
            console.log("It's a draw.")
            div2.textContent = "Computer chose scissors. It's a draw."
        }
    }
    p1.textContent = "User:  " + userScore + ", Computer:  " + computerScore

    div3.appendChild(p1)
    evaluateScore(userScore, computerScore)
    return { userScore, computerScore }
}


let evaluateScore = (userScore, computerScore) => {
    if (userScore == 5) {
        p2.textContent = "YOU WON!"
        div3.appendChild(p2)
    }
    else if (computerScore == 5) {
        p2.textContent = "YOU LOST!"
        div3.appendChild(p2)
    }
    else {
        p2.textContent = "KEEP PLAYING!"
        div3.appendChild(p2)
    }
}

let userScore = 0;
let computerScore = 0;

btn1.addEventListener('click', () => playGame("rock", getComputerChoice()))
btn2.addEventListener('click', () => playGame("paper", getComputerChoice()))
btn3.addEventListener('click', () => playGame("scissors", getComputerChoice()))




// 5 round game that keeps score
// let game = () => {
//     let user = 0
//     let computer = 0
//     for (let i = 1; i <= 5; i++) {
//         let scores = playGame(getUserChoice(), getComputerChoice())
//         user += scores.userScore
//         computer += scores.computerScore
//     }

//     if (user > computer)
//         alert("You won!")
//     else if (computer > user)
//         alert("You lost!")
//     else
//         alert("DRAW!")

//     // an object
//     return { user, computer }
// }

// console.log(game())