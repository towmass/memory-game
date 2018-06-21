
const arrayCards = ["fa-bomb", "fa-diamond", "fa-bicycle", "fa-leaf", "fa-bolt",
 "fa-paper-plane-o", "fa-anchor", "fa-cube", "fa-bomb",
 "fa-diamond", "fa-bicycle", "fa-leaf", "fa-bolt", "fa-paper-plane-o",
 "fa-anchor", "fa-cube"]; // List of classes (= card symbols) as an array
let openCards = []; //List of opened cards
let moves;
let moveCounter = document.querySelector(".moves");

const deck = document.getElementById("deck").children;
const newDeck = document.getElementById("deck");

function randomDeck(arrayCards) {
    newDeck.innerHTML = ""; // Erase default deck

    moves = 0; // Reset moves
    moveCounter.innerText = moves; // Change number of moves

    shuffle(arrayCards); // Shuffle the array of symbols
    arrayCards.forEach(function(element){ // Create new deck with random cards' positions by looping through earch card in array and creating its HTML
        const card = document.createElement("li");
        const symbol = document.createElement("i");
        card.classList.add("card");
        //symbol.classList.remove("fa", element);
        newDeck.appendChild(card);
        card.appendChild(symbol);
        }); // End of forEach loop

       // // // // //  SECOND FOREACH // // // // // 
    const selectCards = document.getElementById("deck").children;
    const cards = Array.from(selectCards); 
    console.log(cards);
    const selectSymbols = document.getElementsByTagName("i");
    const symbolsOrigin = Array.from(selectSymbols);
    symbolsOrigin.splice(0, 6);
    let symbolsToMatch = [];
    let currentCards = [];     
    cards.forEach(function(item, index) {
        item.addEventListener("click", function (e){
            openCards.push(item);
            symbolsToMatch.push(arrayCards[index]);
            console.log(symbolsToMatch)

            const currentCard = this;
            const previousCard = openCards[0];

            if (!item.classList.contains("open", "show", "match")) { // Prevent player from double clicking the same card or match card

            if (openCards.length <2) {
                item.classList.add("open","show", "disable");
                symbolsOrigin[index].classList.add("fa", arrayCards[index]);
                currentCards.push(this);
                } // End of if
            else { // If cards do not match, flip cards back
                item.classList.add("open","show", "disable");
                symbolsOrigin[index].classList.add("fa", arrayCards[index]);

                if (symbolsToMatch[0] === symbolsToMatch[1]) { // Matching mechanism - comparing the cards
                    console.log("Matched!");
                    currentCard.classList.add("match");
                    previousCard.classList.add("match");

                    symbolsToMatch = [];
                    openCards = [];
                    finish();
                }
                else {
                console.log("Does not match.");
                setTimeout(function() {
                    openCards.forEach(function(card){
                        card.classList.remove("open", "show", "disable");
                        symbolsOrigin[index].classList.remove("fa", arrayCards[index]);
                    });
                    openCards = [];
                }, 300) // End of setTimeout
                symbolsToMatch = [];
                } // End of else
                moves += 1; // Add one move
                moveCounter.innerText = moves; // Show current number of moves
                rating(); // Update the rating
            }; // End of else

           /*  if (openCards.includes(symbol)) {
                console.log("match!");
            };
            console.log("Opened cards: " + openCards.length); */
        }}); // end of eventListener
    }); // end of forEach loop

}; // end of randomDeck function

randomDeck(arrayCards);
restart();

function finish() { // Check if the player finished the game
    let guessedCards = document.getElementsByClassName("match");
    if (guessedCards.length == 16) {
        console.log("GAME FINISHED !!!!");
    } else {
        console.log("keep playin");
    }
};

function restart() { // Restart the game when clicking the restart button
    const restartButton = document.querySelector(".restart");
    restartButton.addEventListener("click", function() {
        randomDeck(arrayCards);
        stars.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li>";
    })
};

const stars = document.querySelector(".stars");
function rating() { // Rating system which removes stars as moves add up
    switch(moves) {
        case 13:
            stars.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star-o'></i></li>";
        break;

        case 18:
            stars.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li>";
        break;

        case 24:
            stars.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li>";
        break;

        case 32:
            stars.innerHTML = "<li><i class='fa fa-star'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li><li><i class='fa fa-star-o'></i></li>";
        break;
    }
};

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(arrayCards) {
    var currentIndex = arrayCards.length, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arrayCards[currentIndex];
        arrayCards[currentIndex] = arrayCards[randomIndex];
        arrayCards[randomIndex] = temporaryValue;
    }
    return arrayCards;
};


 // set up the event listener for a card. If a card is clicked:
/* function clickedCard(event) {
    if(event.target && event.target.nodeName === "LI") {

        symbol.classList.remove("fa", element);
    }
}; */


 //    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 //    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 //    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 //    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
