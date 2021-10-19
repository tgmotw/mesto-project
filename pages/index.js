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

/*Настраиваем popup добавления новой карточки*/
const popupAddPlace = document.querySelector('.popup-add-place');
/*Открываем окно*/
const profileAddNewPlaceBtn = document.querySelector('.profile__add-new-place-button');

profileAddNewPlaceBtn.addEventListener('click',  function(){
    popupAddPlace.classList.toggle('popup-add-place_opened');
});
/*Закрываем окно*/
const popupAddPlaceCloseBtn = document.querySelector('.popup-add-place__close-button');

popupAddPlaceCloseBtn.addEventListener('click',  function(){
    popupAddPlace.classList.toggle('popup-add-place_opened');
});

/*Настраиваем popup редактирования пользователя*/
const popupUserEdit = document.querySelector('.popup-user-edit');
/*Открываем окно*/
const profileUserNameModifyBtn = document.querySelector('.profile__user-name-modify-button');

profileUserNameModifyBtn.addEventListener('click',  function(){
    popupUserEdit.classList.toggle('popup-user-edit_opened');
});
/*Закрываем окно*/
const popupUserEditCloseBtn = document.querySelector('.popup-user-edit__close-button');

popupUserEditCloseBtn.addEventListener('click',  function(){
    popupUserEdit.classList.toggle('popup-user-edit_opened');
});