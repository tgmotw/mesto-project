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

/*Запускаем функции-------------------------------------------------------------------------------------------*/
setPopupCloseBtnsEventListeners(popupCloseBtnsList);
enableValidation(config);

/*Добавляем карточки из массива*/
initialCards.forEach(function (arrElement){
        addCard(createCard(arrElement.name, arrElement.link), cardsList, false);
});

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
})