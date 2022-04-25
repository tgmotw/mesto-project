import './index.css'
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
import {cardAdd, cardCreate, cardsList, initialCards} from "./cards";

/*Запускаем функции-------------------------------------------------------------------------------------------*/
popupOpenBtnsSetEventListeners(popupOpenBtnsList);
popupCloseBtnsSetEventListeners(popupCloseBtnsList)
enableValidation(config);

/*Добавляем карточки из массива*/
initialCards.forEach(function (arrElement){
        cardAdd(cardCreate(arrElement.name, arrElement.link), cardsList, false);
});