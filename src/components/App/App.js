import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '../Header/Header';
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

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleBurgerMenuClick() {
    setIsMenuOpen(true);
  }

  function handleCloseMenuClick() {
    setIsMenuOpen(false);
  }

  return (
    <div className="page">
      <Switch>

        <Route exact path="/">
          <Header onViewMenu={handleBurgerMenuClick} isOpen={isMenuOpen} onCloseMenu={handleCloseMenuClick}/>
          <Promo />
          <AboutProject />
          <Techs />
          <AboutMe />
          <Footer />
        </Route>

        <Route path="/movies">
          <Header onViewMenu={handleBurgerMenuClick} isOpen={isMenuOpen} onCloseMenu={handleCloseMenuClick}/>
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <Header onViewMenu={handleBurgerMenuClick} isOpen={isMenuOpen} onCloseMenu={handleCloseMenuClick}/>
          <SearchForm />
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Header onViewMenu={handleBurgerMenuClick} isOpen={isMenuOpen} onCloseMenu={handleCloseMenuClick}/>
          <Profile />
        </Route>

        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

      </Switch>
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
