
console.log("Up and running!");
var cards =["queen","king","queen","king"];
var cardsInPlay = [];
var checkForMatch= function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
alert("You found a match!");
} else {
alert("Sorry, try again.");

}}
var flipCard = function (cardId){
console.log("user flipped "+ cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(1);
checkForMatch();

