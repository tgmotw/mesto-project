export {closePopup,
        openPopup,
        setPopupOpenBtnsEventListeners,
        setPopupCloseBtnsEventListeners,
        popupCloseBtnsList,
        popupOpenBtnsList,
        profilePopup,
        placePopup,
        imagePopup}

/*Определяем все кнопки открытия и закрытия попапов*/
const popupOpenBtnsList = Array.from(document.querySelectorAll('.popup__open-button'));
const popupCloseBtnsList = Array.from(document.querySelectorAll('.popup__close-button'));

/*Определяем все попапы*/
const profilePopup = document.querySelector('.popup_user-edit');
const placePopup = document.querySelector('.popup_place-add');
const imagePopup = document.querySelector('.popup_img-watch');
const popupsList = Array.from(document.querySelectorAll('.popup'))

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
    if (Array.from(evt.target.classList).includes('popup__container')){
        closePopup(evt.target.closest('.popup'))
    }
}
/*Декларируем функцию определения клавиши esc*/
function handleEscKey(evt){
    if (evt.key === "Escape"){
        popupsList.forEach((popupsListItem) => {
          if (Array.from(popupsListItem.classList).includes('popup_opened')){;
              closePopup(popupsListItem);
          }
        });
    }
}

/*Декларируем функцию добавления лиссенеров на кнопки открытия окон*/
function setPopupOpenBtnsEventListeners(popupOpenBtnsList){
    popupOpenBtnsList.forEach((popupOpenBtn) => {
        popupOpenBtn.addEventListener('click', (evt) => {
            const popupObject = document.querySelector(`.popup_${popupOpenBtn.id}`);
            openPopup(popupObject);
        })
    });
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
