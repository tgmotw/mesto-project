import './index.css'
import '../components/cards'
import '../components/popups'
import '../components/validate'


/*Блок работы с карточкой места---------------------------------------------------------------------------------------*/



/*Блок работы с popups---------------------------------------------------------------------------------------------*/
    /*Определяем все popups*/
const popupUserEdit= document.querySelector('.popup_user-edit');
const popupPlaceAdd = document.querySelector('.popup_place-add');
const popupImgWatch = document.querySelector('.popup_img-watch');

    /*Определяем все элементы открытия popups*/
const profileUserNameModifyBtn = document.querySelector('.profile__user-name-modify-button');
const profileAddNewPlaceBtn = document.querySelector('.profile__add-new-place-button');

    /*Определяем все элементы закрытия popups*/
const popupCloseBtn = document.querySelectorAll('.popup__close-button');

    /*Декларируем функцию открытия и закрытия*/
function popupOpen(popupObject){
    popupObject.classList.add(`popup_opened`);
}

function popupClose(popupObject){
    popupObject.classList.remove(`popup_opened`);
}

    /*Вешаем лиссенеры на элементы открытия и закрытия popups*/
profileUserNameModifyBtn.addEventListener('click', function (){
    popupOpen(popupUserEdit);
});

profileAddNewPlaceBtn.addEventListener('click', function (){
    popupOpen(popupPlaceAdd);
});

popupCloseBtn.forEach(function (arrElement){
    arrElement.addEventListener('click',  function(){
        popupClose(this.closest('.popup'));
    });
});

/*Блок работы с формами---------------------------------------------------------------------------------------*/
    /*Форма редактирования профиля*/
const formTwoInputsUserEdit = document.querySelector('.form-two-inputs_user-edit');
const formTwoInputsInputUserName = formTwoInputsUserEdit.querySelector('.form-two-inputs__input_user_name');
const formTwoInputsInputUserStatus = formTwoInputsUserEdit.querySelector('.form-two-inputs__input_user_status');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');

function formTwoInputsUserEditSubmitHandler (evt) {
    evt.preventDefault();
    profileUserName.textContent = formTwoInputsInputUserName.value;
    profileUserStatus.textContent = formTwoInputsInputUserStatus.value;
    popupClose(popupUserEdit);
}

formTwoInputsUserEdit.addEventListener('submit', formTwoInputsUserEditSubmitHandler);

    /*Форма добавления каточки нового места*/
const formTwoInputsPlaceAdd = document.querySelector('.form-two-inputs_place-add');
const formTwoInputsInputPlaceName = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_name');
const formTwoInputsInputPlaceLink = formTwoInputsPlaceAdd.querySelector('.form-two-inputs__input_place_link');

function formTwoInputsPlaceAddSubmitHandler (evt){
    evt.preventDefault();
    cardAdd(cardCreate(formTwoInputsInputPlaceName.value, formTwoInputsInputPlaceLink.value), cardsList, true);
    popupClose(popupPlaceAdd);
    formTwoInputsPlaceAdd.reset();
}

formTwoInputsPlaceAdd.addEventListener('submit', formTwoInputsPlaceAddSubmitHandler);