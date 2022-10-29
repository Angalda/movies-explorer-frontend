import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import * as mainApi from "../../utils/MainApi";

import Header from '../Header/Header';
import Main from '../Main/Main'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Movies from '../Movies/Movies'
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import ProtectedRoute from '../ProtectedRoute';

function App() {
  const loggedIn = true;
  const [authorized, setAuthorized] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState("");
  const history = useHistory();
  const [locationKeys, setLocationKeys] = useState([])

  const [savedMovies, setSavedMovies] = useState([])
  const [width, setWidth] = useState(window.innerWidth);
  const [listLength, setListLength] = useState(12);
  const [cardsNumber, setCardsNumber] = useState(4);

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
          // Handle forward event
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
          // Handle back event
          history.goBack()
        }
      }
    })
  }, [locationKeys,])

  /*Авторизация*/
  useEffect(() => {
    if (authorized) {

      mainApi.getProfile()
        .then((res) => {
          setCurrentUser(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [authorized])

  useEffect(() => {
    const jwt = localStorage.getItem("jwt")
    if (jwt) {
      checkToken()
    }
  }, [history])

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt")
      if (jwt) {
        mainApi
          .checkToken(jwt)
          .then((data) => {
            if (data) {
              setAuthorized(true);
              setCurrentUser(data.data);
            }
          })
          .catch((err) => {

            if (err === 401) {
              setAuthorized(false)
              console.log("401 - Токен не передан или передан не в том формате")
            }
            console.log("401 - Переданный токен не корректен")

          })
      }
      if (!jwt) {
        setAuthorized(false)
      }
    }
  }

  //Регистрация
  function handleRegister(name, email, password) {
    mainApi
      .register(name, email, password)
      .then((res) => {
        if (res) {
          handleLogin(email, password)
        }
      })
      .catch((err) => {
        // setInfoTooltipOpen(true)
        // setIsSymbol(false)
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        if (err === 400) {
          console.log("400 - некорректно заполнено одно из полей");
        }

      })
  }

  //Вход
  function handleLogin(password, email) {
    mainApi
      .login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token)
          checkToken();
          history.push("/movies");
        }

      })
      .catch((err) => {
        // setInfoTooltipOpen(true)
        //  setIsSymbol(false)
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
        if (err === 400) {
          console.log("400 - не передано одно из полей")
        } else if (err === 401) {
          console.log("401 - пользователь с email не найден")
        }

      })
  }

  //Выход
  function handleLogout() {
    setCurrentUser({})
    setAuthorized(false)
    localStorage.removeItem("jwt")
    localStorage.clear()
    history.push('/')
  }

  //Редактирование
  function handleEditProfile({ name, email }) {
    mainApi
      .editProfile(name, email)
      .then((res) => {
        setCurrentUser(res);
        //setInfoTooltipOpen(true)
        //setIsSymbol(true)
        setMessage("Данные профиля успешно изменены.");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Что-то пошло не так! Попробуйте ещё раз.");
      });

  }

  function newWindowWidth() {
    setWidth(window.innerWidth);
  }

  function getMoreMovies() {
    setListLength(listLength + cardsNumber);
  }

  useEffect(() => {
    if (width > 991.98) {
      setCardsNumber(4);
      setListLength(12);
    } else if (width <= 991.98) {
      setCardsNumber(2);
      setListLength(8);
    } else if (width <= 575.98) {
      setCardsNumber(1);
      setListLength(5);
    }
  }, [width]);

  useEffect(() => {
    window.addEventListener('resize', newWindowWidth);
    return () => window.removeEventListener('resize', newWindowWidth)
  }, []);

  //Список сохраненных фильмов
  useEffect(() => {
    if (authorized) {

      mainApi.getSaveMovies()
        .then((saveMovies) => {
          if (saveMovies) {
            const moviesOfCurrentUser = saveMovies.data.filter(
              (movie) =>
                currentUser._id === movie.owner
            );
            setSavedMovies(moviesOfCurrentUser);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [authorized]);

  //Сохраняем фильм
  function handleSaveMovie(movie) {
    mainApi.saveMovie(movie)
      .then((newMovie) => {
        setSavedMovies([...savedMovies, newMovie.data]);
        localStorage.setItem('favoriteMovies', JSON.stringify(newMovie));
      })
      .catch((err) => console.log(err));
  };

  //Удаляем фильм
  function handleDeleteMovie(movie) {

    const deleteMovie = savedMovies.find((i) => i.movieId === movie.id || i.movieId === movie.movieId);

    mainApi.deleteMovie(deleteMovie._id)
      .then((res) => {
        const newMoviesList = savedMovies.filter((m) => {
          if (movie.id === m.movieId || movie.movieId === m.movieId) {
            return false;
          } else {
            return true;
          }
        });
        setSavedMovies(newMoviesList);

        localStorage.setItem('favoriteMovies', JSON.stringify(newMoviesList));
      })
      .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className="page">
        <Header authorized={authorized} />
        <Main>
          <Switch>

            <ProtectedRoute exact path="/movies">
              <Route>
                <Movies
                  onLikeClick={handleSaveMovie}
                  onDeleteClick={handleDeleteMovie}
                  saveMovieList={savedMovies}
                  listLength={listLength}
                  setListLength={setListLength}
                  width={width}
                  getMoreMovies={getMoreMovies}
                />
              </Route>
            </ProtectedRoute>

            <ProtectedRoute exact path="/saved-movies">
              <Route>
                <SavedMovies
                  onDeleteClick={handleDeleteMovie}
                  saveMovieList={savedMovies}
                  listLength={listLength}
                  getMoreMovies={getMoreMovies}
                />
              </Route>
            </ProtectedRoute>

            <ProtectedRoute exact path="/profile">
              <Route>
                <Profile editProfile={handleEditProfile} logout={handleLogout} loggedIn={loggedIn} authorized={authorized} message={message} />
              </Route>
            </ProtectedRoute>

            <Route exact path="/signin">
              {authorized ? (<Redirect to="/" />) : (
                <Login onLogin={handleLogin} />
              )}
            </Route>

            <Route exact path="/signup" >
              {authorized ? (<Redirect to="/" />) : (
                <Register register={handleRegister} />
              )}
            </Route>

            <Route exact path="/">
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
            </Route>

            <Route path="/">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
