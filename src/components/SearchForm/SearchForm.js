import React, { useState } from 'react';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import useFormWithValidation from "../../utils/validation";

export default function SearchForm({
    onSearch,
    shortMovies,
    handleCheckboxClick,
    savedMoviesPage = false,
   }) {

    const searchPrase = localStorage.getItem('searchPhrase');
    const { errors, values, handleChange } = useFormWithValidation({searchPrase});
    const [inputError, setInputError] = useState(errors[0]);
    const [searchValue, setSearchValue] = useState(searchPrase);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (e.target.querySelector('input').value === '') {
        setInputError("Нужно ввести ключевое слово");
      } else if (!e.target.checkValidity()){
        setInputError(e.target.querySelector('input').validationMessage);
      } else {
        setInputError("");
        setSearchValue(values.search);
        onSearch(values.search);
      }
    };

    return (
        <section className="searchForm">
            <form className="searchForm__form" onSubmit={handleSubmit} noValidate>
                <input
                    className="searchForm__input"
                    type="text"
                    id="search"
                    name="search"
                    required
                    defaultValue={!savedMoviesPage ? searchValue : ''}
                    onChange={handleChange}
                    placeholder="Фильм"
                    minLength="1"
                    pattern="^[A-Za-zА-Яа-яЁё0-9-\s]+$" />
                <button type="submit" className="searchForm__button">Поиск</button>
            </form>
            <p className={`search-form__error ${inputError ? "search-form__error_visible" : ""}`}>{inputError}</p>


            <FilterCheckbox shortMovies={shortMovies} handleCheckboxClick={handleCheckboxClick} />

        </section>
    )
}