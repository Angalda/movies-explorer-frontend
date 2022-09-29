import logo from '../../images/logo.svg';

export default function Login() {
  return (
    <section className="login__container">
      <div className='login__wrap'>
      <a href="/" className='login__logo-link'>
        <img className="login__logo" src={logo} alt="logo" />
      </a>
      <h1 className="login__title">Рады видеть!</h1>
      <form className="login__form">

        <label className="login__input-name">E-mail</label>
        <input className="login__input" type="text" name="email" required placeholder="pochta@yandex.ru"></input>


        <label className="login__input-name">Пароль</label>
        <input className="login__input login__input-password login__input-error" type="text" name="password" required placeholder="••••••••••••••"></input>
      

        <button className="login__submit" type="submit">Войти</button>

        <div className='login__register'>
          <p className='login__text-register'>Ещё не зарегистрированы?</p>
          <button className="login__submit-register" type="submit">Регистрация</button>
        </div>
      </form>
      </div>
    </section>
  )
}