/*Настраиваем Click для кнопки Like карточки места*/
let cardLikeBtn = document.querySelectorAll('.cards__card-like-button');

cardLikeBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        if (this.classList.contains('cards__card-like-button_active')){
            this.classList.toggle('cards__card-like-button_active');
        } else{
            this.classList.toggle('cards__card-like-button_active');
        }
    });
});


