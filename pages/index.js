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

/*Настраиваем удаление карточки места*/
let cardsCardDeleteBtn = document.querySelectorAll('.cards__card-delete-button');

cardsCardDeleteBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        if (confirm("Вы уверены, что хотите удалить карточку?")) {
            this.closest('.cards__list-item').remove();}
    });
});
