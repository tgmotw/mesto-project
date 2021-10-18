let cardLikeBtn = document.querySelectorAll('.cards__card-like-button');
console.log(cardLikeBtn.length);
for (let i = 0; i < cardLikeBtn.length; i++) {
    alert(cardLikeBtn[i].style.backgroundImage);
}
/*
cardLikeBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        console.log(getComputedStyle(this).backgroundImage+'2222');
        console.log(this.style.backgroundImage+'1111');
        if(this.style.backgroundImage === 'url("http://localhost:63342/mesto-project/blocks/cards/__card-like-button/images/cards__card-like-button.svg")'){
            this.style.backgroundImage = 'url("http://localhost:63342/mesto-project/blocks/cards/__card-like-button/_active/images/cards__card-like-button_black.svg")';
        } else{
            this.style.backgroundImage = 'url("http://localhost:63342/mesto-project/blocks/cards/__card-like-button/images/cards__card-like-button.svg")';
        }
    });
});
*/
cardLikeBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        if (this.classList.contains('cards__card-like-button_active')){
            this.classList.toggle('cards__card-like-button_active');
        } else{
            this.classList.toggle('cards__card-like-button_active');
        }
    });
});
