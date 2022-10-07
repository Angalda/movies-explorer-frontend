import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
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
import {MoviesApi} from '../../utils/MoviesApi';


function App() {
  const [isloggedIn, setIsLoggedIn] = useState(false);;
  const [currentUser, setCurrentUser] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const history = useHistory();

  
  useEffect(() => {
    if (isloggedIn) {
        mainApi.getProfile()
            .then(
                ([userData, allMoviesList]) => {
                    setCurrentUser(userData.data);
                    setAllMovies(allMoviesList.data);
                })
            .catch((err) => console.log(err))
    }

}, [isloggedIn]);

  useEffect(() => {

    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      mainApi.checkToken(jwt)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [history])

  function checkToken() {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        mainApi.checkToken(jwt)
          .then((res) => {
            if (res) {
              setIsLoggedIn(true);
              setCurrentUser(res);
            }
          })
          .catch((err) => {
            setIsLoggedIn(false);
            if (err === 400) { console.log("Токен не передан или передан не в том формате") }
            else if (err === 401) { console.log("Переданный токен некорректен ") }
          })
      }
      if (!jwt) { setIsLoggedIn(false);}
    }
  }

  //Регистрация и авторизация
  function handleRegister(name, email, password) {
    return mainApi.register(name, email, password)
        .then((res) => {
            if (res) {handleLogin(email, password)}
        })
        .catch((err) => {
            if (err.status === 400) { console.log("400: не передано одно из полей"); }
        });
}

function handleLogin(password, email) {
    return mainApi.login(password, email)
        .then((res) => {
            localStorage.setItem("jwt", res.token);
            handlePageLogin()
            history.push("/movies");
        })
        .catch((err) => {
            if (err.status === 400) {
                console.log("400: не передано одно из полей");
            } else if (err.status === 401) { console.log("400: пользователь с email не найден") }
        });
}

function handlePageLogin() {
  setIsLoggedIn(true);
  checkToken();
}

  function handleLogout() {
    setCurrentUser({})
    setIsLoggedIn(false)
    localStorage.removeItem("jwt")
    localStorage.clear()
    history('/')
  }

  function handleEditProfile(info) {
    mainApi.editProfile(info)
    .then((res) => {
      setCurrentUser(res);
      console.log('Данные изменены')
    })
  }

  return (
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
          <Profile editProfile={handleEditProfile} logout={handleLogout}/>
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register register={handleRegister}/>
        </Route>

        </Switch>
      </Main>
      <Footer />

    </div>
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
