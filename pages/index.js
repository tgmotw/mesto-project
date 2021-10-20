/*Функционал по добавлению карточек мест*/
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const cardsBlock = document.querySelector('.cards__list');

function cardsAddFunc(arrCardsObjects, cardsBlock){
    for (let i = 0; i < arrCardsObjects.length; i++){
        cardsBlock.insertAdjacentHTML(
            'beforeend',
            `<li class="cards__list-item">
                    <article class="cards__card">
                      <img src="${arrCardsObjects[i].link}"
                        alt="${arrCardsObjects[i].name}"
                        class="cards__card-image">
                      <div class="cards__card-description">
                        <h2 class="cards__card-name">${arrCardsObjects[i].name}</h2>
                        <button class="cards__card-like-button"
                          type="button"
                          aria-label="Кнопка отмечает картинку как любимую">
                        </button>
                      </div>
                      <button class="cards__card-delete-button"
                        type="button"
                        aria-label="Кнопка удаляет картинку">
                      </button>
                    </article>
                   </li>`
        );
    }
}

cardsAddFunc(initialCards, cardsBlock);

/*Настраиваем Click для кнопки Like карточки места-------------------------------------------------------------------*/
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

/*Настраиваем удаление карточки места--------------------------------------------------------------------------------*/
let cardsCardDeleteBtn = document.querySelectorAll('.cards__card-delete-button');

cardsCardDeleteBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        if (confirm("Вы уверены, что хотите удалить карточку?")) {
            this.closest('.cards__list-item').remove();}
    });
});

/*Настраиваем popup добавления новой карточки------------------------------------------------------------------------*/
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

/*Обработчик формы*/
const placeAddForm = document.querySelector('.popup-add-place__form');
const placeNameInput = placeAddForm.querySelector('.popup-add-place__form-input_new-place_name');
const photoLinkInput = placeAddForm.querySelector('.popup-add-place__form-input_new-place_link');
const cardsCardName = document.querySelector('.cards__card-name');

function placeAddFormSubmitHandler (evt) {
    evt.preventDefault();
    cardsCardName.textContent = placeNameInput.value;
    let initialCard =[{name: placeNameInput.value, link: photoLinkInput.value}];
    cardsAddFunc(initialCard, cardsBlock);
    popupAddPlace.classList.toggle('popup-add-place_opened');
}

placeAddForm.addEventListener('submit', placeAddFormSubmitHandler);

/*Настраиваем popup редактирования пользователя----------------------------------------------------------------------*/
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

/*Обработчик формы*/
const userEditForm = document.querySelector('.popup-user-edit__form');
const nameInput = userEditForm.querySelector('.popup-user-edit__form-input_user_name');
const jobInput = userEditForm.querySelector('.popup-user-edit__form-input_user_status');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');

function userEditFormSubmitHandler (evt) {
    evt.preventDefault();
    profileUserName.textContent = nameInput.value;
    profileUserStatus.textContent = jobInput.value;
    popupUserEdit.classList.toggle('popup-user-edit_opened');
}

userEditForm.addEventListener('submit', userEditFormSubmitHandler);


/*Настраиваем popup просмотра картинки-------------------------------------------------------------------------------*/
const popupImgWatch = document.querySelector('.popup-img-watch');
const popupImgWatchImg = document.querySelector('.popup-img-watch__img');
const popupImgWatchImgTitle = document.querySelector('.popup-img-watch__img-title');

/*Открываем окно*/
const cardsCardImage = document.querySelectorAll('.cards__card-image');

cardsCardImage.forEach(function (i){
    i.addEventListener('click',  function(){
        popupImgWatchImg.setAttribute('src', this.getAttribute('src'));
        popupImgWatchImgTitle.textContent = this.closest('.cards__card').querySelector('.cards__card-name').textContent;
        popupImgWatch.classList.toggle('popup-img-watch_opened');
    });
});
/*Закрываем окно*/
const popupImgWatchCloseBtn = document.querySelector('.popup-img-watch__close-button');

popupImgWatchCloseBtn.addEventListener('click',  function(){
    popupImgWatch.classList.toggle('popup-img-watch_opened');
});



