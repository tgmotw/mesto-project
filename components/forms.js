/*Импорты*/
import {addCard,cardsList, createCard} from "./cards";
import {closePopup, placePopup, profilePopup} from "./popups";
import {config} from "./validate";

/*Экспорты*/
export {handleProfileFormSubmit, handlePlaceFormSubmit};

/*Определеяем переменные поиска элементов*/
const inputPlaceName = document.getElementById('form-two-inputs__input-place-name');
const inputPlaceLink = document.getElementById('form-two-inputs__input-place-link');
const inputUserName = document.getElementById('form-two-inputs__input-user-name');
const inputUserStatus = document.getElementById('form-two-inputs__input-user-status');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');


/*Функции работы с формой*/
function handlePlaceFormSubmit(formsListItem){
        addCard(createCard(inputPlaceName.value, inputPlaceLink.value), cardsList, true);
        formsListItem.reset();
        formsListItem.querySelector(config.submitBtnSelector).setAttribute('disabled', 'disabled');
        formsListItem.querySelector(config.submitBtnSelector).classList.remove(config.submitBtnActiveSelector);
        closePopup(placePopup);
}

function handleProfileFormSubmit(){
        profileUserName.textContent = inputUserName.value;
        profileUserStatus.textContent = inputUserStatus.value;
        closePopup(profilePopup);
}