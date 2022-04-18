import {popupOpen} from "./popups.js";

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

/*Определяем попап*/
const popupImgWatch = document.querySelector('.popup_img-watch');

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
        console.log(popupImgWatch)
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