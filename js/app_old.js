/*
 * Create a list that holds all of your cards
 */
NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const arrayCards = [];
const deck = document.getElementById("deck").children;
const newDeck = document.getElementById("deck");
arrayCards.push(deck); // Adds all cards to empty array
for (let item of arrayCards) {
    console.log(item);
};
//console.log(arrayCards[4].toString().length);
const numberOfCards = 16;

function randomDeck(arrayCards) {
    shuffle(arrayCards);
    arrayCards.forEach(function(element, index, arrayCards){
        const z = document.createElement("li");
       let test = z.innerHTML = arrayCards[index];
       newDeck.appendChild(test);
    });
};

randomDeck(arrayCards);

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML 
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(arrayCards) {
    var currentIndex = numberOfCards, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = arrayCards[currentIndex];
        arrayCards[currentIndex] = arrayCards[randomIndex];
        arrayCards[randomIndex] = temporaryValue;
    }
    return arrayCards;
};

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
