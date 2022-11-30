import React, { useEffect, useState } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from '../SearchForm/SearchForm';
import { filterMovies, filterShortMovies } from "../../utils/utils";
import Preloader from "../Preloader/Preloader";


export default function MoviesSave({saveMovieList=[], onDeleteClick, listLength, getMoreMovies}) {
    const [initialMoviesList, setInitialMoviesList] = useState(saveMovieList);
    const [filteredMovies, setFilteredMovies] = useState(initialMoviesList);
    const [shortMovies, setShortMovies] = useState(false);
    const [emptySearchResult, setEmptySearchResult] = useState(true);
    const [isLoadingData, setIsLoadingData] = useState(false);
    const [searchPhraseQuery, setSearchPhraseQuery] = useState('');
  
    const showLoader = () => {
      setIsLoadingData(true);
      setTimeout(() => setIsLoadingData(false), 500);
    };
    // Фильтрация избранного по поисковой фразе
    const handleSearch = (inputValue) => {
        showLoader();
        setSearchPhraseQuery(inputValue)
        if (filterMovies(saveMovieList, searchPhraseQuery, shortMovies).length > 0) {
          setEmptySearchResult(false);
          setFilteredMovies(filterMovies(saveMovieList, inputValue, shortMovies))
          setInitialMoviesList(filterMovies(saveMovieList, inputValue, shortMovies))
        } else {
          setEmptySearchResult(true);
        }
      };
    
      // Клик на чекбокс корометражек
      const handleCheckboxClick = () => {
        if (!shortMovies) {
          setShortMovies(true);
          setInitialMoviesList(filterShortMovies(filteredMovies));
          filterShortMovies(filteredMovies).length === 0 || saveMovieList === 0 ? setEmptySearchResult(true) : setEmptySearchResult(false);
        } else {
          setShortMovies(false);
          filteredMovies.length === 0 || saveMovieList === 0 ? setEmptySearchResult(true) : setEmptySearchResult(false);
          setInitialMoviesList(filteredMovies);
        }
      };
    
      // Проверка чекбокса
      useEffect(() => {
        if (shortMovies) {
          setShortMovies(true);
          setInitialMoviesList(filterMovies(saveMovieList, searchPhraseQuery, shortMovies));
        } else {
          setShortMovies(false);
          setInitialMoviesList(filterMovies(saveMovieList, searchPhraseQuery, shortMovies));
        }
      }, [saveMovieList, shortMovies, searchPhraseQuery]);
    
      useEffect(() => {
        if(saveMovieList.length !== 0) {
          setEmptySearchResult(false)
        } else {
          setEmptySearchResult(true)
        }
      }, [saveMovieList])

    return (
        <>
        <SearchForm
        onSearch={handleSearch}
        shortMovies={shortMovies}
        handleCheckboxClick={handleCheckboxClick}
        savedMoviesPage={true}
      />
      <section className="movies">
        <div className="movies__container page__container page__container_page_inner">
          {isLoadingData ? <Preloader /> : ""}
            <MoviesCardList
              movies={initialMoviesList}
              savedMoviesPage={true}
              emptySearchResult={emptySearchResult}
              saveMovieList={saveMovieList}
              onDeleteClick={onDeleteClick}
              listLength={listLength}
              getMoreMovies = {getMoreMovies}
            />
        </div>
      </section>
      </>
    )
}