import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

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
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
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
