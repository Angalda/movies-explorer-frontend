
class MoviesApi {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (!res.ok) {
            
            return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
    }

    //Загрузка фильмов с сервера
    getMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        })
            .then(this._checkResponse)
    }
}

export const api = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    headers: {
        'Content-Type': 'application/json',
    },
});
