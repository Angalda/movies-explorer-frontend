export const BASE_URL = `${'https://api.movies.angalda.nomoredomains.sbs' || 'http://api.movies.angalda.nomoredomains.sbss' || '//localhost:3001' }`;

function checkRes(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`${res.status}`)
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({
      name: name,
      email: email,
      password: password   
    }),
  })
    .then(checkRes);
};

export function login(password, email) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      password: password,
      email: email
    }),
  })
    .then(checkRes)
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })

};

//Получаем с сервера информацию о пользователе
export function getProfile() {
  return fetch(`${this._baseUrl}/users/me`, {
    headers: this._headers,
    credentials: 'include',
  })
    .then(this._checkResponse)
}


export function checkToken(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    credentials: 'include',
  })
    .then(checkRes);
};

export function editProfile (name, email, jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    credentials: 'include',
    body: JSON.stringify({
      name: name,
      email: email
    }),
  })
    .then(checkRes)
};

export function getSaveMovies () {
  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
    .then(checkRes);
}


export function saveMovie (movie) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: 'include',
    body: JSON.stringify(movie),
  })
    .then(checkRes);
}

export function deleteMovie (id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
    credentials: 'include',
  })
    .then(checkRes);
}