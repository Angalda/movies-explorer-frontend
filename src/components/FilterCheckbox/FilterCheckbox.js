import React, { useState } from 'react';

export default function FilterCheckbox({shortMovies, handleCheckboxClick}) {
    return (

        <section className="filterCheckbox">
            <div className="filterCheckbox__container">
                <input className="filterCheckbox__input" type="checkbox" id="shortFilm" onChange={handleCheckboxClick} checked={shortMovies}/>
                <label htmlFor="shortFilm" className="filterCheckbox__label">Короткометражки</label>
            </div>

        </section>
    )
}