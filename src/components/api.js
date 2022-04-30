/*Экспорты*/
export {getCardsListApi, getUserProfileApi}

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