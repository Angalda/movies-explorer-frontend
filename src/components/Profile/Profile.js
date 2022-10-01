import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <section className="profile__container">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form className="profile__form">
        <div className="profile__inputs">
          <label className="profile__input-name">Имя</label>
          <input className="profile__input" type="text" name="name" required placeholder="Виталий"></input>
        </div>
        <div className="profile__inputs">
          <label className="profile__input-name">E-mail</label>
          <input className="profile__input" type="text" name="email" required placeholder="  pochta@yandex.ru"></input>
        </div>
        <button className="profile__submit-edit" type="submit">Редактировать</button>
        <button className="profile__submit-logout" type="submit"><Link to="/signin" className="profile__submit-logout-link">Выйти из аккаунта</Link></button>
      </form>

    </section>
  )
}