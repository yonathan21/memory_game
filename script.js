const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e){

  let clickedCard = e.target;

  if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add('flip'); 
    if(!cardOne){
      return cardOne = clickedCard; 
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector('img').src,
    cardTwoImg = cardTwo.querySelector('img').src;

    matchcards(cardOneImg, cardTwoImg);
  }

}

function matchcards(img1, img2){

  if(img1 === img2){
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    cardOne = cardTwo = "";
    return disableDeck = false;
  }

  setTimeout(() => {
    cardOne.classList.add('shake');
    cardTwo.classList.add('shake');
  }, 400);

  setTimeout(() => {
    cardOne.classList.remove('shake', 'flip');
    cardTwo.classList.remove('shake', 'flip');
    cardOne = cardTwo = "";
    disableDeck = false;
  }, 1200);
 
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});