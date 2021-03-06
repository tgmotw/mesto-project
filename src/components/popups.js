/*Импорты*/

import {profileUserName,
        profileUserStatus,
        inputUserName,
        inputUserStatus} from "./forms";
/*Экспорты*/
export {closePopup,
        openPopup,
        setPopupCloseBtnsEventListeners,
        popupCloseBtnsList,
        editUserAvatarBtn,
        profilePopup,
        placePopup,
        imagePopup,
        avatarPopup}

/*Определяем все кнопки открытия и закрытия попапов*/
const popupCloseBtnsList = Array.from(document.querySelectorAll('.popup__close-button'));

/*Определяем все попапы*/
const profilePopup = document.querySelector('.popup_user-edit');
const placePopup = document.querySelector('.popup_place-add');
const imagePopup = document.querySelector('.popup_img-watch');
const avatarPopup = document.querySelector('.popup_avatar-edit');
const popupsList = Array.from(document.querySelectorAll('.popup'));

/*Определяем все кнопки открытия попапов*/
const modifyUserNameBtn = document.querySelector('.profile__user-name-modify-button');
const editUserAvatarBtn = document.querySelector('.profile__user-edit-button');
const addNewPlaceBtn = document.querySelector('.profile__add-new-place-button');

/*Декларируем функцию открытия окна*/
function openPopup(popupObject){
    popupObject.classList.add(`popup_opened`);
    window.addEventListener('click', clickTarget);
    window.addEventListener('keydown', handleEscKey);
}
/*Декларируем функцию закрытия окна*/
function closePopup(popupObject){
    popupObject.classList.remove(`popup_opened`);
    window.removeEventListener('click', clickTarget);
    window.removeEventListener('keydown', handleEscKey);
}
/*Декларируем функцию определения таргета клика*/
/*Необходимы оба if с одним не работает в верхней полосе контейнера, в которой размещён крестик*/
/*Контейнер включает форму и крестик, а сам попап растянут на весь экран*/
function clickTarget(evt){
    if (Array.from(evt.target.classList).includes('popup')){
        closePopup(evt.target);
    }
}
/*Декларируем функцию определения клавиши esc*/
function handleEscKey(evt){
    if (evt.key === "Escape"){
        popupsList.forEach((popupsListItem) => {
          if (Array.from(popupsListItem.classList).includes('popup_opened')){;
              popupsListItem.querySelector('.form').reset();
              closePopup(popupsListItem);
          }
        });
    }
}

/*Декларируем функцию добавления лиссенеров на кнопки закрытия окон*/
function setPopupCloseBtnsEventListeners(popupCloseBtnsList){
    popupCloseBtnsList.forEach((popupCloseBtn) => {
        popupCloseBtn.addEventListener('click', (evt) => {
            const popupObject = popupCloseBtn.closest('.popup');
            closePopup(popupObject);
        });
    });
}

/*Вешаем лиссенеры на кнопки открытия окон*/
modifyUserNameBtn.addEventListener('click', (evt) => {
    inputUserName.value = profileUserName.textContent;
    inputUserStatus.value = profileUserStatus.textContent;
    openPopup(profilePopup);
})

editUserAvatarBtn.addEventListener('click', (evt) => {
    openPopup(avatarPopup);
})

addNewPlaceBtn.addEventListener('click', (evt) =>{
    openPopup(placePopup);
})