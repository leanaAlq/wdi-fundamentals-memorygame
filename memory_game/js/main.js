
console.log("Up and running!");
var cardsInPlay = [];
var cards =["queen","queen","king","king"];
alert('Hello, friends.');
var cardOne = cards[0];
var cardTwo = cards[3];
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("user flipped "+ cardsInPlay[0]);
console.log("user flipped "+ cardsInPlay[1]);
if(cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1])
alert("you found a match");
		else 
alert("sorry try again!");
}

