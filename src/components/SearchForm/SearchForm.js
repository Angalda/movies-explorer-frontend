import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

export default function SearchForm() {
    return (
        <section className="searchForm">
            <form className="searchForm__form">
                <input className="searchForm__input" placeholder="Фильм" required="true" />
                <button type="button" className="searchForm__button">Поиск</button>
            </form>
            <FilterCheckbox />

        </section>
    )
}