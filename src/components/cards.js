/*Экспорты*/
export {cardsList, addCard, createCard}

/*Импорты*/
import {openPopup} from "./popups.js";
import {deletePlaceCardApi,
        likePlaceCardApi,
        dislikePlaceCardApi,
        errCatch} from "./api";

/*Определяем контейнер для карточек*/
const cardsList = document.querySelector('.cards__list');

/*Определяем заготовку для карточки*/
const cardTemplate = document.querySelector('.template').content;

/*Определяем попап*/
const popupImgWatch = document.querySelector('.popup_img-watch');
const popupImage = document.querySelector('.form-img-watch__img');
const popupImageTitle = document.querySelector('.form-img-watch__img-title');

/*Декларируем функцию работы с лайком*/
function likeCard(likeButton, card, cardLikeBtnLabel){
    if (Array.from(likeButton.classList).includes('cards__card-like-button_active')){
        dislikePlaceCardApi(card._id)
            .then(res => {
                likeButton.classList.remove('cards__card-like-button_active');
                cardLikeBtnLabel.textContent = res.likes.length;
            })
            .catch(err => errCatch(err));
    }else{
        likePlaceCardApi(card._id)
            .then(res => {
                likeButton.classList.add('cards__card-like-button_active')
                cardLikeBtnLabel.textContent = res.likes.length;
            })
            .catch(err => errCatch(err));
    }
}

/*Декларируем функцию удаления карточки*/
function deleteCard(deleteButton){
    deleteButton.closest('.cards__list-item').remove();
}

/*Декларируем функцию модификации клона карточки*/
function createCard(card, user){
    const newCard = cardTemplate.querySelector('.cards__list-item').cloneNode(true);
    const newCardImage = newCard.querySelector('.cards__card-image');
    const cardDeleteBtn = newCard.querySelector('.cards__card-delete-button');
    const cardLikeBtn = newCard.querySelector('.cards__card-like-button');
    const cardLikeBtnLabel = newCard.querySelector('.cards__card-like-button-label');

    /*настраиваем картинку в карточке*/
    newCardImage.setAttribute('src', `${card.link}`);
    newCardImage.setAttribute('alt', `${card.name}`);
    newCard.querySelector('.cards__card-name').textContent = card.name;

    /*Настраиваем кнопку лайк*/
    if (card.likes.length !==0){
        card.likes.forEach(cardLike =>{
            if (cardLike._id === user){
                cardLikeBtn.classList.add('cards__card-like-button_active')
            }
        })
    }

    cardLikeBtnLabel.textContent = card.likes.length;

    cardLikeBtn.addEventListener('click', evt => {
        likeCard(evt.target, card, cardLikeBtnLabel);
    })

    /*Проверяем совпадение пользователей и настраиваем кнорку "Удалить"*/
    if (card.owner._id === user){
        cardDeleteBtn.addEventListener('click', (evt) => {
            deletePlaceCardApi(card._id)
                .then(() =>{
                    deleteCard(evt.target)
                })
                .catch(err => errCatch(err));
        });
    }else{
        cardDeleteBtn.classList.add('cards__card-delete-button_inactive')
    }

    /*Добавляем возможность открытия карточки по клику на картинку*/
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
