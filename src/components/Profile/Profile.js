import React, {useState, useRef, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurentUserContext';
import useFormWithValidation from '../../utils/validation';

export default function Profile({logout, editProfile}) {
  const currentUser = useContext(CurrentUserContext);
  const {values, setValues, isValid, handleChange} = useFormWithValidation();
  const nameInput = useRef();
  const emailInput = useRef();
  const [isActive, setIsActive] = useState(false);
  const [inputActive, setInputActive] = useState(false);

  useEffect(() => {
    setValues({
      name: currentUser.name,
      email: currentUser.email
    })
  }, [currentUser])

  function inutEditProfile() {
    setIsActive(true);
    setInputActive(true);
  }


  function handleFormSubmit(evt) {
    evt.preventDefault();
    editProfile({
      name: values.name,
      email: values.email
    });
    setIsActive(false);
    console.log(currentUser)
  }

  function handleToggle() {
    setInputActive(false)
  }

  return (
    <section className="profile__container">
      <h2 className="profile__title">Привет, {currentUser.name}</h2>
      <form className="profile__form" onSubmit={handleFormSubmit}>
        <div className="profile__inputs">
          <label className="profile__input-name">Имя</label>
          <input className="profile__input" type="text" name="name" id="name" ref={nameInput} minLength="2" maxLength="0" required disabled={!inputActive} onChange={handleChange} value={values.name || ''}></input>
        </div>
        <div className="profile__inputs">
          <label className="profile__input-name">E-mail</label>
          <input className="profile__input" type="text" name="email" id="email" ref={emailInput} required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$" disabled={!inputActive} onChange={handleChange} value={values.email || ''}></input>
        </div>
        <button className={`profile__submit-edit ${!isActive ? 'profile__submit-edit_hidden' : ''}`} type="submit" disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)} onClick={handleToggle}>Редактировать</button>
        <button className="profile__submit-logout" type="button" onClick={logout}><Link to="/signin" className="profile__submit-logout-link">Выйти из аккаунта</Link></button>
      </form>

    </section>
  )
}