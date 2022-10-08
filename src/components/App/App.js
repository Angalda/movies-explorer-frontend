import React, { useEffect, useState } from 'react';
import {Route, Switch, Routes, useLocation, useHistory} from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import * as mainApi from "../../utils/MainApi";

import Header from '../Header/Header';
import Main from '../Main/Main'
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import { MoviesApi } from '../../utils/MoviesApi';


function App() {
  const loggedIn = true;
  const [authorized, setAuthorized] = useState(false);
  const [savedMoviesList, setSavedMoviesList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [message, setMessage] = useState("");
  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isSymbol, setIsSymbol] = useState(false);
  const history = useHistory();
  const {pathname} = useLocation();

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
          mainApi
              .getProfile()
              .then((res) => {
                  if (res) {
                      setAuthorized(true)
                  }
              })
              .catch((err) => {
                  console.log(err)
              })
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
                          setCurrentUser(data);
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

  function handleRegister(name, email, password) {
      mainApi
          .register(name, email, password)
          .then((res) => {
              if (res) {
                  handleLogin(password, email)
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

  function handleLogin(email, password) {
      mainApi
          .login(email, password)
          .then((data) => {
              if (data.token) {
                  localStorage.setItem("jwt", data.token)
                  handlePageLogin();
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

  function handlePageLogin() {
      setAuthorized(true);
      checkToken();
  }


  function handleLogout() {
      setCurrentUser({})
      setAuthorized(false)
      localStorage.removeItem("jwt")
      localStorage.clear()
      history.push('/')
  }

  function handleEditProfile({name, email}) {
      mainApi
          .editProfile(name, email)
          .then((res) => {
              setCurrentUser(res);
              //setInfoTooltipOpen(true)
              //setIsSymbol(true)
              setMessage("Данные профиля успешно изменены.");
          })
          .catch((err) => console.log(err));
  }
  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      <div className="page">
        <Header />
        <Main>
          <Switch>
            <Route exact path="/">
              <Promo />
              <AboutProject />
              <Techs />
              <AboutMe />
            </Route>

            <Route path="/movies">
              <SearchForm />
              <MoviesCardList />
            </Route>

            <Route path="/saved-movies">
              <SearchForm />
              <SavedMovies />
            </Route>

            <Route path="/profile">
              <Profile editProfile={handleEditProfile} logout={handleLogout} loggedIn={loggedIn} authorized={authorized} />
            </Route>

            <Route path="/signin">
              <Login onLogin={handleLogin}/>
            </Route>

            <Route path="/signup">
              <Register register={handleRegister} />
            </Route>

          </Switch>
        </Main>
        <Footer />

      </div>
    </CurrentUserContext.Provider>
  );
}

/* Главная
<Header />
<Promo />
<AboutProject />
<Techs />
<AboutMe />
<Footer />
*/


/*  Фильмы (с меню)   
<Header />
<SearchForm />
<MoiesCardList />
<Footer />
*/

/* Профиль
  <Header />
  <Profile />
*/

/*Регистрация
<Register />
*/

/* Логин 
 <Login />
*/

/*Не найдено
<NotFound />
*/

/* Сохраненные фильмы
 <Header />
  <SearchForm />
  <SavedMovies />
  <Footer />
*/


export default App;
