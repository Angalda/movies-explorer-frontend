import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Register() {
  return (
    <section className="register__container">
      <div className='register__wrap'>
        <a href="/" className='register__logo-link'>
          <img className="register__logo" src={logo} alt="logo" />
        </a>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form">

          <label className="register__input-name">Имя</label>
          <input className="register__input" type="text" name="name" required placeholder="Виталий"></input>


          <label className="register__input-name">E-mail</label>
          <input className="register__input" type="text" name="email" required placeholder=" pochta@yandex.ru"></input>


          <label className="register__input-name">Пароль</label>
          <input className="register__input register__input-password register__input-error" type="text" name="password" required placeholder="••••••••••••••"></input>
          <p className='register__error'>Что-то пошло не так...</p>

          <button className="register__submit" type="submit">Зарегистрироваться</button>

          <div className='register__login'>
            <p className='register__text-login'>Уже зарегистрированы?</p>
            <button className="register__submit-login" type="submit"><Link to="/signin" className="register__submit-login-link">Войти</Link></button>
          </div>
        </form>
      </div>
    </section>
  )
}