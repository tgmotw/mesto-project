/*Экспорты*/
export {getCardsListApi,
        getUserProfileApi,
        editUserProfileApi,
        addPlaceCardApi,
        deletePlaceCardApi,
        likePlaceCardApi,
        dislikePlaceCardApi,
        editUserAvatarApi,
        errCatch}

/*Конфигурация*/
const settings = {
    url: 'https://nomoreparties.co/v1',
    sert: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
    cohort: '/plus-cohort-9'
}

/*Функция ответа проверки сервера*/
function checkResponse(res){
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}

/*Обработчик ошибок*/
function errCatch(err){
    console.log(`Произошла ошибка! Код ошибки: ${err.status}, статус: ${err.statusText}`)
}

/*Метод получения карточки с сервера*/
function getCardsListApi() {
    return fetch(`${settings.url}${settings.cohort}/cards`, {
        headers: {
            authorization: settings.sert
        }
    })
        .then(res => checkResponse(res))
}

/*Метод получения данных пользователя*/
function getUserProfileApi() {
    return fetch(`${settings.url}${settings.cohort}/users/me`, {
        headers: {
            authorization: settings.sert
        }
    })
        .then(res => checkResponse(res))
}

/*Метод редактирования данных пользователя*/
function editUserProfileApi(userProfile){
    return fetch(`${settings.url}${settings.cohort}/users/me`, {
        method: 'PATCH',
        headers: {
            authorization: settings.sert,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userProfile),

    })
        .then(res => checkResponse(res))
}
/*Метод добавления карточки*/
function addPlaceCardApi(cardParam){
    return fetch(`${settings.url}${settings.cohort}/cards`, {
        method: 'POST',
        headers: {
            authorization: settings.sert,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardParam),

    })
        .then(res => checkResponse(res))
}

/*Метод удаления карточки*/
function deletePlaceCardApi(cardId){
    return fetch(`${settings.url}${settings.cohort}/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: settings.sert,
        },
    })
        .then(res => checkResponse(res))
}

/*Метод добавления лайка карточки*/
function likePlaceCardApi(cardId){
    return fetch(`${settings.url}${settings.cohort}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: settings.sert,
        },
    })
        .then(res => checkResponse(res))
}

/*Метод снятия лайка с карточки*/
function dislikePlaceCardApi(cardId){
    return fetch(`${settings.url}${settings.cohort}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: settings.sert,
        },
    })
        .then(res => checkResponse(res))
}

/*Метод снятия лайка с карточки*/
function editUserAvatarApi(avatarLink){
    return fetch(`${settings.url}${settings.cohort}/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: settings.sert,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatarLink),
    })
        .then(res => checkResponse(res))
}