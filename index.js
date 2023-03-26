let cards =[]
let sumCard = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


////
let player = {
    name: "Josh",
    chips: 80
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


////

function getRandomCard(){
   
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
   
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards =[firstCard, secondCard]
    sumCard = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    if (sumCard <= 20) {
        //console.log("Do you want to draw a new card?")
        message = "Do you want to draw a new card?"
    } else if(sumCard === 21) {
        //console.log("You've got Blackjack!")
        hasBlackJack = true
        message = "You've got Blackjack!"
    } else {
        //console.log("You're out of the game!")
        isAlive = false
        message = "You're out of the game!"
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sumCard
    cardsEl.textContent = "Cards: "
    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
}

function newCard(){

    if(hasBlackJack == false && isAlive == true ){

        let thirdCard = getRandomCard()
        sumCard += thirdCard;
        cards.push(thirdCard)
        renderGame()
    }

    if(hasBlackJack == true){
        getRandomCard()
    }
    
}



