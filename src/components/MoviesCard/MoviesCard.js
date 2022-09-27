import React from "react";


export default function MoviesCard({picture, title, duration}) {
    return (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <img className="moviesCard__img" src={picture} alt={'film'} />
            </div>
            <div className="moviesCard__description">
                <h2 className="moviesCard__title">{title}</h2>
                <div className="moviesCard__contain-select">
                    <div className="moviesCard__select"></div>
            </div>
            </div>
            <div className="moviesCard__duration">{duration}</div>
            
        </li>
    )
}