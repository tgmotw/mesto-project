/*Блок работы с popups---------------------------------------------------------------------------------------------*/
/*Определяем все popups*/
const popupStandart = document.querySelectorAll('.popup');
const popupImgWatch = document.querySelector('.form-img-watch');
const popupImgWatchName = `popup-img-watch`

/*Определяем элементы привязки вызовов popup*/
const cardsCardImage = document.querySelector('.cards__card-image');
/*Объявляем функции открытия и закрытия*/
function popupOpenFunc(popupObject){
    popupObject.classList.toggle(`${popupObject.getAttribute('id')}_opened`);
}

cardsCardImage.addEventListener('click', function (){
    popupOpenFunc(popupImgWatch);
})