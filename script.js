const cards = document.querySelectorAll(".card");

let cardOne, cardTwo;

function flipCard(e){

  let clickedCard = e.target;
  clickedCard.classList.add('flip'); 

  if(clickedCard !== cardOne){
    if(!cardOne){
      return cardOne = clickedCard; 
    }
    cardTwo = clickedCard;
    
    let cardOneImg = cardOne.querySelector('img').src,
    cardTwoImg = cardTwo.querySelector('img').src;

    matchcards(cardOneImg, cardTwoImg);
  }

}

function matchcards(img1, img2){
  if(img1 === img2){
    return console.log('card matched');
  }
  console.log('not matched');
}

cards.forEach(card => {
  card.addEventListener('click', flipCard);
});