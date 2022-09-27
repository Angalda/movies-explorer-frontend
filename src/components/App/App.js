

import Header from '../Header/Header';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function App() {
  return (
    <div className="page">
      <Header />
      <SearchForm />
      <MoviesCardList />
      <Footer />
    </div>
  );
}

/*
<Header />
<Promo />
<AboutProject />
<Techs />
<AboutMe />
<Footer />
*/

export default App;
