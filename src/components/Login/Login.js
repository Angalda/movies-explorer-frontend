import React, { useState, useRef, useContext, useEffect } from "react";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Login({onLogin, isLoadingLogin}) {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [formValid, setFormvalid] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const regular = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!regular.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email")
      if (!e.target.value) {
        setEmailError('Обязательно для заполнения')
      }
    } else {
      setEmailError("")
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 8 || e.target.value.length > 50) {
      setPasswordError('Пароль должен быть длиннее 8 и меньше 50')
      if (!e.target.value) {
        setPasswordError('Обязательно для заполнения')
      }
    } else {
      setPasswordError('')
    }
  }

  useEffect(() => {
    if (emailError || passwordError) {
      setFormvalid(false)
    } else { setFormvalid(true) }
  }, [emailError, passwordError])


  function handleSubmit(e) {
    e.preventDefault();
    onLogin(email, password)
  };

  return (
    <section className="login__container">
      <div className='login__wrap'>
        <Link to="/" className='login__logo-link'>
          <img className="login__logo" src={logo} alt="logo" />
        </Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>

          <label className="login__input-name">E-mail</label>
          <input 
          className={`login__input ${!emailError ? '' : 'login__input-error'}`}
          type="text" 
          name="email" 
          required 
          placeholder="pochta@yandex.ru"
          onChange={emailHandler}
          value={email}
          disabled={isLoadingLogin}
          ></input>
         <p className={`register__error ${!emailError ? 'register__error_hidden' : ''}`}>Что-то пошло не так... {emailError}</p>

          <label className="login__input-name">Пароль</label>
          <input 
          className={`login__input login__input-password ${!passwordError ? '' : 'login__input-error'}`}
          type="password" 
          name="password" 
          required 
          placeholder="••••••••••••••"
          onChange={passwordHandler}
          value={password}
          disabled={isLoadingLogin}
          ></input>
          <p className={`register__error ${!passwordError ? 'register__error_hidden' : ''}`}>Что-то пошло не так... {passwordError}</p>



          <button 
          className={`login__submit ${!formValid ? 'login__submit_disabled' : ''}`} 
          type="submit" 
          disabled={!formValid || isLoadingLogin}
          >Войти</button>

          <div className='login__register'>
            <p className='login__text-register'>Ещё не зарегистрированы?</p>
            <button className="login__submit-register" type="button"><Link to="/signup" className="login__submit-register-link">Регистрация</Link></button>
          </div>
        </form>
      </div>
    </section>
  )
}
