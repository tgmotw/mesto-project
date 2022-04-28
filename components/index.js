import '../src/index.css'
import './cards'
import './popups'
import './validate'

import {popupClose,
        popupOpenBtnsSetEventListeners,
        popupCloseBtnsSetEventListeners,
        popupCloseBtnsList,
        popupOpenBtnsList} from "./popups"

import {enableValidation,
        config} from "./validate";
import {addCard, createCard, cardsList, initialCards} from "./cards";

/*Запускаем функции-------------------------------------------------------------------------------------------*/
popupOpenBtnsSetEventListeners(popupOpenBtnsList);
popupCloseBtnsSetEventListeners(popupCloseBtnsList)
enableValidation(config);

/*Добавляем карточки из массива*/
initialCards.forEach(function (arrElement){
        addCard(createCard(arrElement.name, arrElement.link), cardsList, false);
});