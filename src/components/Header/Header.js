import logo from '../../images/logo.svg';
import account from '../../images/icon-profile.svg';
import close from '../../images/icons/close.svg';

export default function Header(){
  return (
    <header className="header">
      <a href="/">
        <img className="header__logo" src={logo} alt="logo" />
      </a>
      <nav className='header__menu'>
        <ul className='header__menu-list'>
          <li className='header__menu-item'><a href="#" className="header__menu-item-link">Фильмы</a></li>
          <li className='header__menu-item'><a href="#" className="header__menu-item-link">Сохраненные фильмы</a></li>
        </ul>
      </nav>
      <a href = "#" className="header__account-container"><img className='header__account-img' src={account} alt="icon-account" /> Аккаунт</a>
      <button className='header__burger-menu'>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
        <div className="header__burger-line"></div>
      </button>
      {/* Меню по клику на бургер */}
      <div className='header__navigation-wrap'></div>
      <div className='header__navigation'>
        <button className='header__navigation-close'><img src={close}></img></button>
        <nav className='header__nav'>
          <ul className='header__nav-list'>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Главная</a></li>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Фильмы</a></li>
            <li className='header__nav-item'><a href="#" className="header__nav-item-link">Сохраненные фильмы</a></li>
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