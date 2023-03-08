const messagesStorage = {
    "login required": {"en": "login required", "ru": "требуется логин"},
    "this login in use": {"en": "this login in use", "ru": "логин занят"},
    "user not found": {"en": "user not found", "ru": "пользователь не найден"},
    "password required": {"en": "password required", "ru": "требуется пароль"},
    "password\'s repeat required": {"en": "password\'s repeat required", "ru": "требуется повторить пароль"},
    "wrong password": {"en": "wrong password", "ru": "неправильный пароль"},
    "name required": {"en": "name required", "ru": "требуется имя фильма"},
    "text required": {"en": "text required", "ru": "требуется текст"},
    "rating required": {"en": "rating required", "ru": "требуется оценка"},
    "Film not found": {"en": "Film not found", "ru": "Фильм не найден"}
};

function translateValMessage(req, valMsg) {
    return messagesStorage[valMsg][req.session.lang];
}

module.exports = translateValMessage;