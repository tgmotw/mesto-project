export {popupOpen,
        popupClose,
        popupOpenBtnsSetEventListeners,
        popupCloseBtnsSetEventListeners,
        popupCloseBtnsList,
        popupOpenBtnsList}


const popupOpenBtnsList = Array.from(document.querySelectorAll('.popup__open-button'));
const popupCloseBtnsList = Array.from(document.querySelectorAll('.popup__close-button'));

/*Декларируем функцию открытия окна*/
function popupOpen(popupObject){
    popupObject.classList.add(`popup_opened`);
    window.addEventListener('click', clickTarget);
    window.addEventListener('keydown', keyDownEsc);
}
/*Декларируем функцию закрытия окна*/
function popupClose(popupObject){
    popupObject.classList.remove(`popup_opened`);
    window.removeEventListener('click', clickTarget);
    window.removeEventListener('keydown', keyDownEsc);
}
/*Декларируем функцию определения таргета клика*/
function clickTarget(evt){
    if (Array.from(evt.target.classList).includes('popup')){
        popupClose(evt.target);
    }
    if (Array.from(evt.target.classList).includes('popup__container')){
        popupClose(evt.target.closest('.popup'))
    }
}
/*Декларируем функцию определения клавиши esc*/
function keyDownEsc(evt){
    if (evt.key === "Escape"){
        const popupsList = Array.from(document.querySelectorAll('.popup'))
        popupsList.forEach((popupsListItem) => {
          if (Array.from(popupsListItem.classList).includes('popup_opened')){;
              popupClose(popupsListItem);
          }
        });
    }
}

/*Декларируем функцию добавления лиссенеров на кнопки открытия окон*/
function popupOpenBtnsSetEventListeners(popupOpenBtnsList){
    popupOpenBtnsList.forEach((popupOpenBtn) => {
        popupOpenBtn.addEventListener('click', (evt) => {
            const popupObject = document.querySelector(`.popup_${popupOpenBtn.id}`);
            popupOpen(popupObject);
        })
    });
}
/*Декларируем функцию добавления лиссенеров на кнопки закрытия окон*/
function popupCloseBtnsSetEventListeners(popupCloseBtnsList){
    popupCloseBtnsList.forEach((popupCloseBtn) => {
        popupCloseBtn.addEventListener('click', (evt) => {
            const popupObject = popupCloseBtn.closest('.popup');
            popupClose(popupObject);
        });
    });
}
