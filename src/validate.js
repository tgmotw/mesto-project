/*Экспорты*/
export {config,
        enableValidation,
        toggleSubmitBtn}

/*Экспорты*/
import {formExecution} from "./forms";

/*Конфигурация*/
const config = {
    formsSelector: '.form-two-inputs',
    inputsSelector: '.form-two-inputs__input',
    inputsInValidSelector: 'form-two-inputs__input_invalid',
    submitBtnSelector: '.form-two-inputs__submit-button',
    submitBtnActiveSelector: 'form-two-inputs__submit-button_active'
}

/*Функция валидации формы*/
function enableValidation(config){
    const formsList = Array.from(document.querySelectorAll(config.formsSelector));
    formsList.forEach((formsListItem) => {
        formsListItem.addEventListener('submit', (evt) => {
            evt.preventDefault();
            formExecution(formsListItem);
        });
        inputsSetEventListeners(formsListItem);
    });
}
/*Функция навешивания лиссенеров на инпуты*/
function inputsSetEventListeners(formsListItem){
    const inputsList = Array.from(formsListItem.querySelectorAll(config.inputsSelector));
    toggleSubmitBtn(formsListItem, inputsList);
    inputsList.forEach((inputsListItem) => {
        inputsListItem.addEventListener('input', (evt) => {
            isValid(formsListItem, inputsListItem);
            toggleSubmitBtn(formsListItem, inputsList);
        });
    });
}
/*Функция проверки правильности заполнения поля*/
function isValid(formsListItem, inputsListItem){
    if (!inputsListItem.validity.valid){
       showInputError(formsListItem, inputsListItem, inputsListItem.validationMessage);
    }else{
       hideInputError(formsListItem, inputsListItem);
    }
}
/*Функция проверки валидности всех полей*/
function inputsValidityCheck(inputsList){
    return inputsList.some((element) => {
        return !element.validity.valid;
    });
}
/*Функция отображения сообщения об ошибке*/
function showInputError(formsListItem, inputsListItem, errorMessage){
    const errorMessageSpan = formsListItem.querySelector(`.${inputsListItem.id}-error-message`);
    errorMessageSpan.textContent = errorMessage;
    inputsListItem.classList.add(config.inputsInValidSelector);
}
/*Функция сокрытия сообщения об ошибке*/
function hideInputError(formsListItem, inputsListItem){
    const errorMessageSpan = formsListItem.querySelector(`.${inputsListItem.id}-error-message`);
    errorMessageSpan.textContent = '';
    inputsListItem.classList.remove(config.inputsInValidSelector);
}
/*Функция активирования кнопки Сабмит*/
function toggleSubmitBtn(formsListItem, inputsList) {
    const submitBtn = formsListItem.querySelector(config.submitBtnSelector);
    if (inputsValidityCheck(inputsList)) {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.classList.remove(config.submitBtnActiveSelector);
    } else {
        submitBtn.classList.add(config.submitBtnActiveSelector);
        submitBtn.removeAttribute('disabled');
    }
}