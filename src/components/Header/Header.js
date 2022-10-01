import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Router, Route } from "react-router"

import logo from '../../images/logo.svg';
import account from '../../images/icon-profile.svg';
import close from '../../images/icons/close.svg';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <nav className={`header__menu ${pathname !== '/' ? '' : 'header__menu_hidden'}`}>
        <ul className='header__menu-list'>
          <li className='header__menu-item'><Link to="/movies" className="header__menu-item-link">Фильмы</Link></li>
          <li className='header__menu-item'><Link to="/saved-movies" className="header__menu-item-link">Сохранённые фильмы</Link></li>
        </ul>
      </nav>
      <Link to="/profile" className="header__account-container"><img className='header__account-img' src={account} alt="icon-account" /> Аккаунт</Link>
      <button className='header__burger-menu'>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
      </button>
      {/* Меню по клику на бургер header__navigation_none*/}
      <div className='header__navigation-wrap header__navigation_none'></div>
      <div className='header__navigation header__navigation_none'>
        <button className='header__navigation-close'><img src={close}></img></button>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Главная</a></li>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Фильмы</a></li>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Сохранённые фильмы</a></li>
          </ul>
          <a href="#" className="header__nav-account-container"><img className='header__nav-account-img' src={account} alt="icon-account" /> Аккаунт</a>
        </nav>
      </div>

      <div className='header__login'>
        <button className='header__signup-btn'>Регистация</button>
        <button className='header__signin-btn'>Войти</button>
      </div>
    </header>
  )
}
