import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formValid, setFormValid] = useState(false);


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

  const nameHandler = (e) => {
    setName(e.target.value)
    const regular = /^[A-Za-zА-Яа-яёЁ -]+$/
    if (!regular.test(String(e.target.value).toLowerCase())) {
      setNameError("Некорректное имя")
      if (!e.target.value) {
        setNameError('Обязательно для заполнения')

      }
    } else {
      setNameError("")
    }
  }

  useEffect(() => {
    if (emailError || nameError || passwordError) {
      setFormValid(false)
    } else { setFormValid(true) }
  }, [emailError, nameError, passwordError])


  function handleSubmit(e) {
    e.preventDefault();
    props.register(name, email, password)
  };

  return (
    <section className="register__container">
      {props.children}
      <div className='register__wrap'>
        <a href="/" className='register__logo-link'>
          <img className="register__logo" src={logo} alt="logo" />
        </a>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" onSubmit={handleSubmit} noValidate>

          <label className="register__input-name">Имя</label>
          <input 
          className={`register__input register__input-name ${!nameError ? '' : 'register__input-error'}`}
          type="text" 
          name="name" 
          value={name} 
          onChange={nameHandler} 
          minLength="2" 
          maxLength="100" 
          disabled={props.isLoadingRegister}
          required></input>
          
          <p className={`register__error ${!nameError ? 'register__error_hidden' : ''}`}>Что-то пошло не так... {nameError}</p>

          <label className="register__input-name">E-mail</label>
          <input 
          className={`register__input register__input-email ${!emailError ? '' : 'register__input-error'}`}
          type="email" 
          name="email" 
          value={email} 
          onChange={emailHandler} 
          minLength="2" 
          maxLength="100"
          disabled={props.isLoadingRegister}
          required></input>
          <p className={`register__error ${!emailError ? 'register__error_hidden' : ''}`}>Что-то пошло не так... {emailError}</p>

          <label className="register__input-name">Пароль</label>
          <input 
          className={`register__input register__input-password ${!passwordError ? '' : 'register__input-error'}`} 
          type="password" 
          name="password" 
          value={password} 
          onChange={passwordHandler} 
          minLength="8" 
          maxLength="50"
          disabled={props.isLoadingRegister}
          required></input>
          <p className={`register__error ${!passwordError ? 'register__error_hidden' : ''}`}>Что-то пошло не так... {passwordError}</p>

          <button className="register__submit" type="submit" disabled={!formValid || props.isLoadingRegister}>Зарегистрироваться</button>

          <div className='register__login'>
            <p className='register__text-login'>Уже зарегистрированы?</p>
            <button className="register__submit-login" type="button"><Link to="/signin" className="register__submit-login-link">Войти</Link></button>
          </div>
        </form>
      </div>
    </section>
  )
}