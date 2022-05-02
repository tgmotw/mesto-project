import '../index.css'
import './cards'
import './popups'
import './validate'

import {
    setPopupCloseBtnsEventListeners,
    popupCloseBtnsList,
    editUserAvatarBtn
} from "./popups"

import {enableValidation,
        config} from "./validate";

import {addCard, createCard, cardsList, initialCards} from "./cards";

import {handlePlaceFormSubmit,
        handleProfileFormSubmit,
        handleAvatarEditFormSubmit} from "./forms";

import {getCardsListApi,
        getUserProfileApi,
        errCatch} from "./api";

/*Запускаем функции-------------------------------------------------------------------------------------------*/
setPopupCloseBtnsEventListeners(popupCloseBtnsList);
enableValidation(config);

/*Добавляем лиссенеры к формам*/
const formTwoInputsPlaceAdd = document.querySelector('#form-two-inputs_place-add');
const formTwoInputsUserEdit = document.querySelector('#form-two-inputs_user-edit');
const formTwoInputsAvatarEdit = document.querySelector('#form-two-inputs_avatar-edit');

formTwoInputsPlaceAdd.addEventListener('submit', (evt) =>{
        evt.preventDefault();
        handlePlaceFormSubmit(evt.target);
});

formTwoInputsUserEdit.addEventListener(('submit'), (evt) => {
        evt.preventDefault();
        handleProfileFormSubmit(evt.target);
});

formTwoInputsAvatarEdit.addEventListener('submit', evt => {
        evt.preventDefault();
        handleAvatarEditFormSubmit(evt.target);
})

/*Заполняем информацию по пользователю*/
const userAvatar = document.querySelector('.profile__user-avatar');
const userName = document.querySelector('.profile__user-name');
const userStatus = document.querySelector('.profile__user-status');

/*Подгружаем данные пользователя и карточки*/
Promise.all([getCardsListApi(), getUserProfileApi()])
    .then(res => {
        res[0].forEach(card => {addCard(createCard(card, res[1]._id), cardsList, false)});
        userAvatar.setAttribute('src', res[1].avatar);
        userName.textContent = res[1].name;
        userStatus.textContent = res[1].about;
        }
    )
    .catch(err => errCatch(err))

/*Настраиваем попап на аватаре*/
userAvatar.addEventListener('mouseenter',evt => {
        editUserAvatarBtn.classList.add('profile__user-edit-button_active');
})

editUserAvatarBtn.addEventListener('mouseleave',evt => {
    evt.target.classList.remove('profile__user-edit-button_active');
})