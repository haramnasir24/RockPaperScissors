// take user input and check if user input is valid

let getUserChoice = () => {
    let userChoice
    while (true) {
        try {
            userChoice = prompt("Choose, rock, paper or scissors!")
            userChoice = userChoice.toLowerCase()
            if (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")) {
                throw new Error("Invalid input, please enter again.")
            }
            else
                break
        }
        catch (e) {
            alert(e.message)
        }
    }
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
    let userScore = 0
    let computerScore = 0
    // compare the choices

    if (isPaper(playerSelection)) {
        if (isScissors(computerSelection)) {
            console.log("Scissors beat paper.")
            computerScore++
        }

        else if (isRock(computerSelection)) {
            console.log("Paper beats rock.")
            userScore++
        }

        else
            console.log("It's a draw.")
    }

    else if (isRock(playerSelection)) {
        if (isScissors(computerSelection)) {
            console.log("Rock beats scissors.")
            userScore++
        }

        else if (isPaper(computerSelection)) {
            console.log("Paper beats rock.")
            computerScore++
        }

        else
            console.log("It's a draw.")
    }

    // scissors
    else {
        if (isPaper(computerSelection)) {
            console.log("Scissors beats paper.")
            userScore++
        }

        else if (isRock(computerSelection)) {
            console.log("Rock beats scissors.")
            computerScore++
        }

        else
            console.log("It's a draw.")
    }
    return { userScore, computerScore }
}

// 5 round game that keeps score
let game = () => {
    let user = 0
    let computer = 0
    for (let i = 1; i <= 5; i++) {
        let scores = playGame(getUserChoice(), getComputerChoice())
        user += scores.userScore
        computer += scores.computerScore
    }

    if (user > computer)
        alert("You won!")
    else if (computer > user)
        alert("You lost!")
    else
        alert("DRAW!")

    // an object
    return { user, computer }
}

console.log(game())