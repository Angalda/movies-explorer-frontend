import logo from '../../images/logo.svg';

export default function Register() {
    return (
      <section className="register__container">
        <h1 className="register__title">Привет, Виталий!</h1>
        <form className="register__form">
            <div className="register__inputs">
                <label className="register__input-name">Имя</label>
                <input className="register__input" type="text" name="name" required placeholder="Виталий"></input>
            </div>
            <div className="register__inputs">
                <label className="register__input-name">E-mail</label>
                <input className="register__input" type="text" name="email" required placeholder="  pochta@yandex.ru"></input>
            </div>
            <div className="register__inputs">
                <label className="register__input-name">E-mail</label>
                <input className="register__input" type="text" name="email" required placeholder="  pochta@yandex.ru"></input>
            </div>
            <button className="register__submit" type="submit">Зарегистрироваться</button>
            <p className='register__text-login'></p><button className="register__submit-login" type="submit">Войти</button>
        </form>

      </section>
    )
  }