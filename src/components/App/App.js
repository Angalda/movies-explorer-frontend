

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';

function App() {
  return (
    <div className="page">
      <Register />
    </div>
  );
}

/* Главная
<Header />
<Promo />
<AboutProject />
<Techs />
<AboutMe />
<Footer />
*/


/*  Фильмы (с меню)   
<Header />
<SearchForm />
MoviesCardList />
<Footer />
*/

/* Профиль
  <Header />
  <Profile />
*/

export default App;
