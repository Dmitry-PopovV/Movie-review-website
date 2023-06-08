const messagesStorage = {
    "Log in": {"en": "Log in", "ru": "Войти"},
    "Join us": {"en": "Join us", "ru": "Регистрация"},
    "My profile": {"en": "My profile", "ru": "Профиль"},
    "Unlog": {"en": "Unlog", "ru": "Выйти"},
    "New review": {"en": "New review", "ru": "Новая рецензия"},
    "Film name": {"en": "Film name", "ru": "Название фильма"},
    "Review": {"en": "Review", "ru": "Текст рецензии"},
    "Rating": {"en": "Rating", "ru": "Оценка"},
    "Confirm": {"en": "Confirm", "ru": "Подтвердить"},
};

function translateHtml(req, valMsg) {
    return messagesStorage[valMsg][req.session.lang];
}

module.exports = translateHtml;