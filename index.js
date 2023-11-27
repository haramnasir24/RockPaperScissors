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
    let winner
    // compare the choices
    if (isPaper(playerSelection)) {
        if (isScissors(computerSelection))
            winner = "You lose, scissors beat paper."
        else if (isRock(computerSelection))
            winner = "You win, paper beats rock."
        else
            winner = "It's a draw."
    }
    else if (isRock(playerSelection)) {
        if (isScissors(computerSelection))
            winner = "You win, rock beats scissors."
        else if (isPaper(computerSelection))
            winner = "You lose, paper beats rock."
        else
            winner = "It's a draw."
    }
    // scissors
    else {
        if (isPaper(computerSelection))
            winner = "You win, scissors beats paper."
        else if (isRock(computerSelection))
            winner = "You lose, rock beats scissors."
        else
            winner = "It's a draw."
    }
    return winner
}

console.log(playGame(getUserChoice(), getComputerChoice()))


