import '../index.css'
import './cards'
import './popups'
import './validate'

import {setPopupCloseBtnsEventListeners,
        popupCloseBtnsList} from "./popups"

import {enableValidation,
        config} from "./validate";

import {addCard, createCard, cardsList, initialCards} from "./cards";

import {handlePlaceFormSubmit, handleProfileFormSubmit} from "./forms";

import {getCardsListApi, getUserProfileApi} from "./api";

/*Запускаем функции-------------------------------------------------------------------------------------------*/
setPopupCloseBtnsEventListeners(popupCloseBtnsList);
enableValidation(config);

/*Добавляем лиссенеры к формам*/
const formTwoInputsPlaceAdd = document.getElementById('form-two-inputs_place-add');
const formTwoInputsUserEdit = document.getElementById('form-two-inputs_user-edit');

formTwoInputsPlaceAdd.addEventListener('submit', (evt) =>{
        evt.preventDefault();
        handlePlaceFormSubmit(evt.target);
});

formTwoInputsUserEdit.addEventListener(('submit'), (evt) => {
        evt.preventDefault();
        handleProfileFormSubmit(evt.target);
});

/*Заполняем информацию по пользователю*/
const userAvatar = document.querySelector('.profile__user-avatar');
const userName = document.querySelector('.profile__user-name');
const userStatus = document.querySelector('.profile__user-status');

/*Подгружаем данные пользователя и карточки*/
getUserProfileApi()
    .then(userProfile => {
            userAvatar.setAttribute('src', userProfile.avatar);
            userName.textContent = userProfile.name;
            userStatus.textContent = userProfile.about;
            return userProfile._id
    })
    .then(userProfileId =>{
            return [userProfileId, getCardsListApi()]
    })
    .then(userAndCards => {
            const userId = userAndCards[0]
            userAndCards[1]
                .then(cardsListLoaded => cardsListLoaded.forEach(card => {
                    addCard(createCard(card, userId), cardsList, false);
            })
    )
    })
    .catch(error => console.log(`Ошибка: ${error.status}`));