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
function cardLike(likeButton){
    likeButton.classList.add('cards__card-like-button_active');
}

    /*Декларируем функцию удаления карточки*/
function cardDelete(deleteButton){
    deleteButton.closest('.cards__list-item').remove();
}

    /*Декларируем функцию модификации клона карточки*/
function cardCreate(cardName, cardLink){
    const newCard = cardTemlate.querySelector('.cards__list-item').cloneNode(true);
    newCard.querySelector('.cards__card-image').setAttribute('src', `${cardLink}`);
    newCard.querySelector('.cards__card-image').setAttribute('alt', `${cardName}`);
    newCard.querySelector('.cards__card-name').textContent = cardName;
    newCard.querySelector('.cards__card-like-button').addEventListener('click', function (){
        cardLike(this);
    });
    newCard.querySelector('.cards__card-delete-button').addEventListener('click', function (){
        cardDelete(this);
    });
    newCard.querySelector('.cards__card-image').addEventListener('click', function (){
        /*Синхронизируем данные карточки и открываемой формы*/
        document.querySelector('.form-img-watch__img').setAttribute('src', this.src);
        document.querySelector('.form-img-watch__img').setAttribute('alt', this.alt);
        document.querySelector('.form-img-watch__img-title').textContent = this.alt;
        /*Открываем popup с формой*/
        popupOpen(popupImgWatch);
    });
    return newCard
}

    /*Декларируем функцию добавления карточки в DOM*/
function cardAdd(card, container, userAdded){
    if (userAdded === false){
        container.append(card);
    }
    if (userAdded === true) {
        container.prepend(card);
    }
}

    /*Добавляем карточки из массива*/
initialCards.forEach(function (arrElement){
    cardAdd(cardCreate(arrElement.name, arrElement.link), cardsList, false);
});

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
function popupOpen(popupObject){
    popupObject.classList.add(`popup_opened`);
}

function popupClose(popupObject){
    popupObject.classList.remove(`popup_opened`);
}

    /*Вешаем лиссенеры на элементы открытия и закрытия popups*/
profileUserNameModifyBtn.addEventListener('click', function (){
    popupOpen(popupUserEdit);
});

profileAddNewPlaceBtn.addEventListener('click', function (){
    popupOpen(popupPlaceAdd);
});

popupCloseBtn.forEach(function (arrElement){
    arrElement.addEventListener('click',  function(){
        popupClose(this.closest('.popup'));
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
    popupClose(popupUserEdit);
}

formTwoInputsUserEdit.addEventListener('submit', formTwoInputsUserEditSubmitHandler);

    /*Форма добавления каточки нового места*/
const formTwoInputsPlaceAdd = document.querySelector('.form-two-inputs_place-add');
const formTwoInputsInputPlaceName = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_name');
const formTwoInputsInputPlaceLink = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_link');

function formTwoInputsPlaceAddSubmitHandler (evt){
    evt.preventDefault();
    cardAdd(cardCreate(formTwoInputsInputPlaceName.value, formTwoInputsInputPlaceLink.value), cardsList, true);
    popupClose(popupPlaceAdd);
    formTwoInputsPlaceAdd.reset();
}

formTwoInputsPlaceAdd.addEventListener('submit', formTwoInputsPlaceAddSubmitHandler);