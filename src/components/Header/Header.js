import logo from '../../images/logo.svg';
import account from '../../images/icon-profile.svg';

export default function Header(){
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="logo" />
      </a>
      <nav className='header__menu'>
        <ul className='header__menu-list'>
          <li className='header__menu-item'>Фильмы</li>
          <li className='header__menu-item'>Сохраненные фильмы</li>
        </ul>
      </nav>
      <a href = "#" className="header__account-container"><img className='header__account-img' src={account} alt="icon-account" /> Аккаунт</a>
      <button className='header__burger-menu'></button>
      <div className='header__login'>
        <button className='header__signup-btn'>Регистация</button>
        <button className='header__signin-btn'>Войти</button>
      </div>
    </header>
  )
}