import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../images/logo.svg';
import account from '../../images/icon-profile.svg';
import close from '../../images/icons/close.svg';

export default function Header({authorized}) {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleBurgerMenuClick() {
    setIsMenuOpen(true);
  }

  function handleCloseMenuClick() {
    setIsMenuOpen(false);
  }

  return (
      <header className={`header ${pathname !== '/' ? '' : 'header__background'} ${pathname === '/signup' ?  'header_hidden' : '' } ${pathname === '/signin' ?  'header_hidden' : '' } `}>
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <nav className={`header__menu ${pathname !== '/' ? '' : 'header__menu_hidden'}`}>
        <ul className='header__menu-list'>
          <li className='header__menu-item'><Link to="/movies" className="header__menu-item-link">Фильмы</Link></li>
          <li className='header__menu-item'><Link to="/saved-movies" className="header__menu-item-link">Сохранённые фильмы</Link></li>
        </ul>
      </nav>
      <div className={`header__container-account ${!authorized ? 'header__container-account_hidden' : ''}`}>
      <Link to="/profile" className="header__account-container"><img className='header__account-img' src={account} alt="icon-account" />Аккаунт</Link>
      </div>
      <div className={`header__container-account ${authorized ? 'header__container-account_hidden' : ''}`}>
      <Link to="/signin" className="header__account-container">Войти</Link>
      <Link to="/signup" className="header__account-container">Зарегистрироваться</Link>
      </div>
      
     

      <button type="button" className={`header__burger-menu ${pathname !== '/' ? '' : 'header__burger-menu-background'}`} onClick={handleBurgerMenuClick}>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
      </button>
      {/* Меню по клику на бургер header__navigation_open*/}
      <div className={`header__navigation-wrap ${isMenuOpen ? 'header__navigation_open' : ''}`}></div>
      <div className={`header__navigation ${isMenuOpen ? 'header__navigation_open' : ''}`}>
        <button type="button" className='header__navigation-close' onClick={handleCloseMenuClick}><img src={close}></img></button>

        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'><Link to="/" className="header__nav-item-link" onClick={handleCloseMenuClick}>Главная</Link></li>
            <li className='header__nav-item'><Link to="/movies" className="header__nav-item-link" onClick={handleCloseMenuClick}>Фильмы</Link></li>
            <li className='header__nav-item'><Link to="/saved-movies" className="header__nav-item-link" onClick={handleCloseMenuClick}>Сохранённые фильмы</Link></li>
          </ul>
          <div className={`header__container-account ${!authorized ? 'header__container-account_hidden' : ''}`}>
          <Link to="/profile" className="header__nav-account-container" onClick={handleCloseMenuClick}><img className='header__nav-account-img' src={account} alt="icon-account" /> Аккаунт</Link>
          </div>
          <div className={`header__container-account ${authorized ? 'header__container-account_hidden' : ''}`}>
          <Link to="/signin" className="header__nav-account-container" onClick={handleCloseMenuClick}>Войти</Link>
          <Link to="/signup" className="header__nav-account-container" onClick={handleCloseMenuClick}>Зарегистрироваться</Link>
          </div>

          </nav>
      </div>

      <div className='header__login'>
        <button type="button" className='header__signup-btn'>Регистация</button>
        <button type="button" className='header__signin-btn'>Войти</button>
      </div>
    </header>
  )
}
