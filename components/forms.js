/*Импорты*/
import {addCard,cardsList, createCard} from "./cards";
import {popupClose} from "./popups";
import {config, toggleSubmitBtn} from "./validate";

/*Экспорты*/
export {formExecution};

/*Функция работы с формой*/
function formExecution(formName){
    if (formName.id === 'form-two-inputs_place-add'){
        addCard(createCard(document.getElementById('form-two-inputs__input-place-name').value,
                           document.getElementById('form-two-inputs__input-place-link').value),
                           cardsList, true);
        formName.reset();
        formName.querySelector(config.submitBtnSelector).setAttribute('disabled', 'disabled');
        formName.querySelector(config.submitBtnSelector).classList.remove(config.submitBtnActiveSelector);
        popupClose(formName.closest('.popup'));
    }
    if (formName.id === 'form-two-inputs_user-edit'){
        document.querySelector('.profile__user-name').textContent = document.getElementById('form-two-inputs__input-user-name').value;
        document.querySelector('.profile__user-status').textContent = document.getElementById('form-two-inputs__input-user-status').value;
        popupClose(formName.closest('.popup'));
    }
}