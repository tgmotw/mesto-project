/*Экспорты*/
export {cardsList, initialCards, addCard, createCard}

/*Импорты*/
import {openPopup} from "./popups.js";

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
const cardTemplate = document.querySelector('.template').content;

/*Определяем попап*/
const popupImgWatch = document.querySelector('.popup_img-watch');

/*Декларируем функцию работы с лайком*/
function likeCard(likeButton){
    likeButton.classList.toggle('cards__card-like-button_active');
}

/*Декларируем функцию удаления карточки*/
function deleteCard(deleteButton){
    deleteButton.closest('.cards__list-item').remove();
}

/*Декларируем функцию модификации клона карточки*/
function createCard(cardName, cardLink){
    const newCard = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
    const newCardImage = newCard.querySelector('.cards__card-image');
    const popupImage = document.querySelector('.form-img-watch__img');
    const popupImageTitle = document.querySelector('.form-img-watch__img-title');

    newCardImage.setAttribute('src', `${cardLink}`);
    newCardImage.setAttribute('alt', `${cardName}`);
    newCard.querySelector('.cards__card-name').textContent = cardName;
    newCard.querySelector('.cards__card-like-button').addEventListener('click', (evt) => {
        likeCard(evt.target);
    });
    newCard.querySelector('.cards__card-delete-button').addEventListener('click', (evt) => {
        deleteCard(evt.target);
    });
    newCardImage.addEventListener('click', (evt) => {
        /*Синхронизируем данные карточки и открываемой формы*/
        popupImage.setAttribute('src', evt.target.src);
        popupImage.setAttribute('alt', evt.target.alt);
        popupImageTitle.textContent = evt.target.alt;
        /*Открываем popup с формой*/
        openPopup(popupImgWatch);
    });
    return newCard
}

/*Декларируем функцию добавления карточки в DOM*/
function addCard(card, container, userAdded){
    if (userAdded === false){
        container.append(card);
    }
    if (userAdded === true) {
        container.prepend(card);
    }
}