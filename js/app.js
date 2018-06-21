
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

    moves = 0;
    moveCounter.innerText = moves; // Change number of moves

    shuffle(arrayCards); // Shuffle the array of symbols
    arrayCards.forEach(function(element){ // Create new deck with random cards' positions by looping through earch card in array and creating its HTML
        const card = document.createElement("li");
        const symbol = document.createElement("i");
        card.classList.add("card");
        //symbol.classList.remove("fa", element);
        newDeck.appendChild(card);
        card.appendChild(symbol);

        const symbolBuild = document.getElementsByTagName("i");
        }); // end of forEach loop

       // // // // //  SECOND FOREACH // // // // // 
    const selectCards = document.getElementById("deck").children;
    const cards = Array.from(selectCards); 
    console.log(cards);
    const selectSymbols = document.getElementsByTagName("i");
    const symbolsOrigin = Array.from(selectSymbols);
    symbolsOrigin.splice(0, 4);
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
                item.classList.add("open","show");
                symbolsOrigin[index].classList.add("fa", arrayCards[index]);
                currentCards.push(this);
                console.log(currentCards);
                } // End of if
            else { // If cards do not match, flip cards back
                item.classList.add("open","show");
                symbolsOrigin[index].classList.add("fa", arrayCards[index]);

                if (symbolsToMatch[0] === symbolsToMatch[1]) { // Matching mechanism - comparing the cards
                    console.log("Matched!");
                    let openShow = document.getElementsByClassName("open", "show");
                    console.log(openShow);
                    currentCard.classList.add("match");
                    previousCard.classList.add("match");

                    symbolsToMatch = [];
                    openCards = [];
                    finish();
                }
                else {
                console.log("doesnt match");
                setTimeout(function() {
                    openCards.forEach(function(card){
                        card.classList.remove("open", "show");
                        symbolsOrigin[index].classList.remove("fa", arrayCards[index]);
                    });
                    openCards = [];
                }, 400)// end of setTimeout
                symbolsToMatch = [];
                } //end of else
                moves += 1;
                moveCounter.innerText = moves;
            }; //end of else

           /*  if (openCards.includes(symbol)) {
                console.log("match!");
            };
            console.log("Opened cards: " + openCards.length); */
        }}); // end of eventListener
    }); // end of forEach loop

}; // end of randomDeck function

randomDeck(arrayCards);


function finish() { // Check if the player finished the game
    let guessedCards = document.getElementsByClassName("match");
    if (guessedCards.length == 16) {
        console.log("GAME FINISHED !!!!");
    } else {
        console.log("keep playin");
    }
}

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

    // add the card to a *list* of "open" cards
    function addToOpenCards () { 
        openedCards.push(e.target);
    }
 //  - if the list already has another card, check to see if the two cards match
function checkMatch() {

};

 //    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 //    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 //    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 //    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
