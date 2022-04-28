import '../src/index.css'
import './cards'
import './popups'
import './validate'

import {setPopupCloseBtnsEventListeners,
        setPopupOpenBtnsEventListeners,
        popupCloseBtnsList,
        popupOpenBtnsList} from "./popups"

import {enableValidation,
        config} from "./validate";
import {addCard, createCard, cardsList, initialCards} from "./cards";

/*Запускаем функции-------------------------------------------------------------------------------------------*/
setPopupCloseBtnsEventListeners(popupCloseBtnsList);
setPopupOpenBtnsEventListeners(popupOpenBtnsList);
enableValidation(config);

/*Добавляем карточки из массива*/
initialCards.forEach(function (arrElement){
        addCard(createCard(arrElement.name, arrElement.link), cardsList, false);
});