import React, { useEffect, useState } from 'react';
import { api } from '../../utils/moviesApi';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { filterMovies, filterShortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";
import { SMALLSCREEN } from '../../utils/constants';
import { MEDIUMSCREEN } from '../../utils/constants';
import { MAX_LENGTH_CARD_LIST } from '../../utils/constants';
import { MEDIUM_LENGTH_CARD_LIST } from '../../utils/constants';
import { SMALL_LENGTH_CARD_LIST } from '../../utils/constants';


export default function Movies({onLikeClick, onDeleteClick, saveMovieList, listLength, setListLength, width, getMoreMovies}) {
  const [isLoadingData, setIsLoadingData] = useState(false);
  const [initialMoviesList, setInitialMoviesList] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [shortMovies, setShortMovies] = useState(false);
  const [emptySearchResult, setEmptySearchResult] = useState(false);
  const [isError, setIsError] = useState(false);
  const getBeatfilmMoviesToStorage = JSON.parse(localStorage.getItem("beatfilmMovies"));

  const checkSearhResult = (moviesList) => (moviesList.length > 0 ? setEmptySearchResult(false) : setEmptySearchResult(true));
  const showLoader = () => {
    setIsLoadingData(true);
    setTimeout(() => setIsLoadingData(false), 300);
  };

  const getAllMovies = () => {
    setIsLoadingData(true);
    api.getMovies()
      .then((moviesList) => {
        if (moviesList.length) {
          setInitialMoviesList(moviesList);
          localStorage.setItem("beatfilmMovies", JSON.stringify(moviesList));
        }
      })
      .catch(() => setIsError(true))
      .finally(() => setIsLoadingData(false))
  }

  // Поиск по фильмам
  const handleSearch = (inputValue) => {
    showLoader();
    if (width > MEDIUMSCREEN) {
      setListLength(MAX_LENGTH_CARD_LIST);
  } else if (width <= MEDIUMSCREEN) {
      setListLength(MEDIUM_LENGTH_CARD_LIST);
  } else if (width <= SMALLSCREEN) {
      setListLength(SMALL_LENGTH_CARD_LIST);
  }
    localStorage.setItem(`searchPhrase`, inputValue);
    localStorage.setItem(`shortMoviesHandler`, shortMovies);
    const moviesList = filterMovies(getBeatfilmMoviesToStorage, inputValue, shortMovies);
    const moviesListAll = filterMovies(getBeatfilmMoviesToStorage, inputValue);
    console.log(moviesListAll);
    console.log(moviesList);
    checkSearhResult(moviesList);
    setInitialMoviesList(moviesListAll);
    setFilteredMovies(shortMovies ? filterShortMovies(moviesList) : moviesList);
    localStorage.setItem(`filteredMovies`, JSON.stringify(moviesListAll));
  };

 /* useEffect(()=>{
    if (initialMoviesList.length===0) {
      getAllMovies();
    }
  })*/

  // Проверка чекбокса в локальном хранилище
  useEffect(() => {
    if (localStorage.getItem(`shortMoviesHandler`) === "true") {
      setShortMovies(true);
    } else {
      setShortMovies(false);
    }
  }, []);

  // Клик на чекбокс корометражек
  const handleCheckboxClick = () => {
    setShortMovies(!shortMovies);
    if (shortMovies) {
      checkSearhResult(initialMoviesList);
      setFilteredMovies(initialMoviesList);
      console.log(shortMovies)
    } else {
      if (filterShortMovies(initialMoviesList).length === 0) {
        setFilteredMovies(filterShortMovies(initialMoviesList));
        setEmptySearchResult(true);
      } else {
        setFilteredMovies(filterShortMovies(initialMoviesList));
        setEmptySearchResult(false);
      }
    }
    localStorage.setItem(`shortMoviesHandler`, !shortMovies);
  };

  // Показ найденных фильмов
  useEffect(() => {
    if (localStorage.getItem("filteredMovies")) {
      const foundMovies = JSON.parse(localStorage.getItem("filteredMovies"));
      checkSearhResult(foundMovies);
      setInitialMoviesList(foundMovies);
      if (localStorage.getItem("shortMoviesHandler") === "true") {
        setFilteredMovies(filterShortMovies(foundMovies));
      } else {
        setFilteredMovies(foundMovies);
      }
    } else {
      if (localStorage.getItem("beatfilmMovies")) {
        setInitialMoviesList(getBeatfilmMoviesToStorage);
        if (localStorage.getItem("shortMoviesHandler") === "true") {
          setFilteredMovies(filterShortMovies(getBeatfilmMoviesToStorage))
        }
      } else {
        getAllMovies();
        setEmptySearchResult(false);
      }

    }
  }, []);
 
    return (
        <>
        <SearchForm
        onSearch={handleSearch}
        shortMovies={shortMovies}
        handleCheckboxClick={handleCheckboxClick}
        savedMoviesPage={false}
      />
      <section className="movies" area-label="Список фильмов">
        <div className="movies__container page__container page__container_page_inner">
          {isLoadingData ? <Preloader /> : ""}
          {isError ? (
            <p className="movies__error movies__error_visible">
              Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и
              попробуйте ещё раз.
            </p>
          ) : (
            <MoviesCardList
              movies={ filteredMovies.length > 0 ? filteredMovies : initialMoviesList} /*{initialMoviesList}*/
              savedMoviesPage={false}
              onLikeClick={onLikeClick}
              onDeleteClick={onDeleteClick}
              saveMovieList={saveMovieList}
              emptySearchResult={emptySearchResult}
              listLength={listLength}
              getMoreMovies = {getMoreMovies}
            />
          )}
        </div>
      </section>
      </>
    )
}