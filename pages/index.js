/*Блок работы с карточкой места---------------------------------------------------------------------------------------*/
    /*Массив с карточками*/
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
    /*Определяем контейнер для карточек*/
const cardsList = document.querySelector('.cards__list');

    /*Определяем заготовку для карточки*/
const cardTemlate = document.querySelector('.template').content;

    /*Декларируем функцию работы с лайком*/
function cardLikeFunc(likeButton){
    likeButton.classList.toggle('cards__card-like-button_active');
}

    /*Декларируем функцию удаления карточки*/
function cardDeleteFunc(deleteButton){
    deleteButton.closest('.cards__list-item').remove();
}

    /*Декларируем функцию модификации клона карточки*/
function cardCreateFunc(cardName, cardLink){
    let newCard = cardTemlate.querySelector('.cards__list-item').cloneNode(true);
    newCard.querySelector('.cards__card-image').setAttribute('src', `${cardLink}`);
    newCard.querySelector('.cards__card-image').setAttribute('alt', `${cardName}`);
    newCard.querySelector('.cards__card-name').textContent = cardName;
    newCard.querySelector('.cards__card-like-button').addEventListener('click', function (){
        cardLikeFunc(this);
    });
    newCard.querySelector('.cards__card-delete-button').addEventListener('click', function (){
        cardDeleteFunc(this);
    });
    newCard.querySelector('.cards__card-image').addEventListener('click', function (){
        /*Синхронизируем данные карточки и открываемой формы*/
        document.querySelector('.form-img-watch__img').setAttribute('src', this.src);
        document.querySelector('.form-img-watch__img').setAttribute('alt', this.alt);
        document.querySelector('.form-img-watch__img-title').textContent = this.alt;
        /*Открываем popup с формой*/
        popupOpenFunc(popupImgWatch);
    });
    return newCard
}

    /*Декларируем функцию добавления карточки в DOM*/
function cardAddFunc(card, container, userAdded){
    if (userAdded === false){
        container.append(card);
    }
    if (userAdded === true) {
        container.prepend(card);
    }
}

    /*Добавляем карточки из массива*/
for(let k = 0; k < initialCards.length; k++){
    let newCard = cardCreateFunc(initialCards[k].name, initialCards[k].link);
    cardAddFunc(newCard, cardsList, false);
}

newCard = null

/*Блок работы с popups---------------------------------------------------------------------------------------------*/
    /*Определяем все popups*/
const popupUserEdit= document.querySelector('.popup_user-edit');
const popupPlaceAdd = document.querySelector('.popup_place-add');
const popupImgWatch = document.querySelector('.popup_img-watch');

    /*Определяем все элементы открытия popups*/
const profileUserNameModifyBtn = document.querySelector('.profile__user-name-modify-button');
const profileAddNewPlaceBtn = document.querySelector('.profile__add-new-place-button');

    /*Определяем все элементы закрытия popups*/
const popupCloseBtn = document.querySelectorAll('.popup__close-button');

    /*Декларируем функцию открытия и закрытия*/
function popupOpenFunc(popupObject){
    popupObject.classList.toggle(`popup_opened`);
}

function popupCloseFunc(popupObject){
    popupObject.classList.remove(`popup_opened`);
}

    /*Вешаем лиссенеры на элементы открытия и закрытия popups*/
profileUserNameModifyBtn.addEventListener('click', function (){
    popupOpenFunc(popupUserEdit);
});

profileAddNewPlaceBtn.addEventListener('click', function (){
    popupOpenFunc(popupPlaceAdd);
});

popupCloseBtn.forEach(function (i){
    i.addEventListener('click',  function(){
        popupCloseFunc(this.closest('.popup'));
    });
});

/*Блок работы с формами---------------------------------------------------------------------------------------*/
    /*Форма редактирования профиля*/
const formTwoInputsUserEdit = document.querySelector('.form-two-inputs_user-edit');
const formTwoInputsInputUserName = formTwoInputsUserEdit.querySelector('.form-two-inputs__input_user_name');
const formTwoInputsInputUserStatus = formTwoInputsUserEdit.querySelector('.form-two-inputs__input_user_status');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');

function formTwoInputsUserEditSubmitHandler (evt) {
    evt.preventDefault();
    profileUserName.textContent = formTwoInputsInputUserName.value;
    profileUserStatus.textContent = formTwoInputsInputUserStatus.value;
    popupCloseFunc(popupUserEdit);
}

formTwoInputsUserEdit.addEventListener('submit', formTwoInputsUserEditSubmitHandler);

    /*Форма добавления каточки нового места*/
const formTwoInputsPlaceAdd = document.querySelector('.form-two-inputs_place-add');
const formTwoInputsInputPlaceName = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_name');
const formTwoInputsInputPlaceLink = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_link');

function formTwoInputsPlaceAddSubmitHandler (evt) {
    evt.preventDefault();
    let newCard = cardCreateFunc(formTwoInputsInputPlaceName.value, formTwoInputsInputPlaceLink.value);
    cardAddFunc(newCard, cardsList, true);
    popupCloseFunc(popupPlaceAdd);
    formTwoInputsInputPlaceName.value = '';
    formTwoInputsInputPlaceLink.value = '';
    newCard = null;
}

formTwoInputsPlaceAdd.addEventListener('submit', formTwoInputsPlaceAddSubmitHandler);