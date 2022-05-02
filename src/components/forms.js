/*Импорты*/
import {addCard,cardsList, createCard} from "./cards";
import {closePopup,
        placePopup,
        profilePopup,
        avatarPopup} from "./popups";
import {config} from "./validate";
import {
        editUserProfileApi,
        addPlaceCardApi,
        getUserProfileApi,
        editUserAvatarApi,
        errCatch} from "./api";

/*Экспорты*/
export {handleProfileFormSubmit,
        handlePlaceFormSubmit,
        handleAvatarEditFormSubmit,
        inputUserName,
        inputUserStatus,
        inputPlaceLink,
        profileUserName,
        profileUserStatus};

/*Определеяем переменные поиска элементов*/
const inputPlaceName = document.querySelector('#form-two-inputs__input-place-name');
const inputPlaceLink = document.querySelector('#form-two-inputs__input-place-link');
const inputUserName = document.querySelector('#form-two-inputs__input-user-name');
const inputUserStatus = document.querySelector('#form-two-inputs__input-user-status');
const inputAvatarLink = document.querySelector('#form-two-inputs__input-avatar-link');
const profileUserName = document.querySelector('.profile__user-name');
const profileUserStatus = document.querySelector('.profile__user-status');
const profileUserAvatar = document.querySelector('.profile__user-avatar');
const formTwoInputsUserEditSubBtn = document.querySelector('#form-two-inputs__avatar-edit-btn');
const formTwoInputsPlaceAddSubBtn = document.querySelector('#form-two-inputs__place-add-btn');
const formTwoInputsAvatarEditSubBtn = document.querySelector('#form-two-inputs__avatar-edit-btn')


/*Функции работы с формой*/
function handlePlaceFormSubmit(formsListItem){
        formTwoInputsPlaceAddSubBtn.textContent = 'Сохранение...'
       Promise.all([addPlaceCardApi({name: inputPlaceName.value, link: inputPlaceLink.value}), getUserProfileApi()])
           .then(res => {
                   addCard(createCard(res[0], res[1]._id), cardsList, true)
                   formsListItem.reset();
                   formsListItem.querySelector(config.submitBtnSelector).setAttribute('disabled', 'disabled');
                   formsListItem.querySelector(config.submitBtnSelector).classList.remove(config.submitBtnActiveSelector);
                   closePopup(placePopup)
           })
           .catch(err => errCatch(err))
           .finally(() => formTwoInputsPlaceAddSubBtn.textContent = 'Добавить');
}

function handleProfileFormSubmit(){
        formTwoInputsUserEditSubBtn.textContent = 'Сохранение...'
        editUserProfileApi({name: inputUserName.value, about: inputUserStatus.value})
            .then(res => {
                    profileUserName.textContent = res.name;
                    profileUserStatus.textContent = res.about;
                    closePopup(profilePopup);
            })
            .catch(err => errCatch(err))
            .finally(() => formTwoInputsUserEditSubBtn.textContent = 'Сохранить');
}

function handleAvatarEditFormSubmit(formsListItem){
        formTwoInputsAvatarEditSubBtn.textContent = 'Сохранение...'
        editUserAvatarApi({avatar: inputAvatarLink.value})
            .then(res => {
                profileUserAvatar.setAttribute('src', res.avatar)
                formsListItem.reset();
                formsListItem.querySelector(config.submitBtnSelector).setAttribute('disabled', 'disabled');
                formsListItem.querySelector(config.submitBtnSelector).classList.remove(config.submitBtnActiveSelector);
                closePopup(avatarPopup)
            })
            .catch(err => errCatch(err))
            .finally(() => formTwoInputsAvatarEditSubBtn.textContent = 'Сохранить');
}