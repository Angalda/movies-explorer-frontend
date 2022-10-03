import React from "react";
import { useLocation } from 'react-router-dom';


export default function MoviesCard({ picture, title, duration, select }) {
    const { pathname } = useLocation();
    return (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <img className="moviesCard__img" src={picture} alt={'film'} />
            </div>
            <div className="moviesCard__description">
                <h2 className="moviesCard__title">{title}</h2>
                <button  type="button" className={`${pathname !== '/saved-movies' ? 'moviesCard__contain-select' : 'moviesCard__delete'}`}>
                    <div className={`moviesCard__select ${!select ? 'moviesCard__select_hidden' : ''}`}></div>
                </button>
            </div>
            <div className="moviesCard__duration">{duration}</div>

        </li>
    )
}