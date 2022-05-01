/*Экспорты*/
export {getCardsListApi,
        getUserProfileApi,
        editUserProfileApi,
        addPlaceCardApi,
        deletePlaceCardApi,
        likePlaceCardApi,
        dislikePlaceCardApi,
        editUserAvatarApi}

/*Метод получения карточки с сервера*/
function getCardsListApi() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод получения данных пользователя*/
function getUserProfileApi() {
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22'
        }
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод редактирования данных пользователя*/
function editUserProfileApi(userProfile){
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/users/me', {
        method: 'PATCH',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userProfile),

    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}
/*Метод добавления карточки*/
function addPlaceCardApi(cardParam){
    return fetch('https://nomoreparties.co/v1/plus-cohort-9/cards', {
        method: 'POST',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cardParam),

    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод удаления карточки*/
function deletePlaceCardApi(cardId){
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/cards/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод добавления лайка карточки*/
function likePlaceCardApi(cardId){
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод снятия лайка с карточки*/
function dislikePlaceCardApi(cardId){
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
        },
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}

/*Метод снятия лайка с карточки*/
function editUserAvatarApi(avatarLink){
    return fetch(`https://nomoreparties.co/v1/plus-cohort-9/users/me/avatar`, {
        method: 'PATCH',
        headers: {
            authorization: '2d811eb1-796d-4958-aa5d-5168e41bfb22',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(avatarLink),
    })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
}