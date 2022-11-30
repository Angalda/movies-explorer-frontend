import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import thumbImgPlaceholder from "../../images/films/placeholder.jpg";
import { transformDurationTime } from '../../utils/utils';



export default function MoviesCard({
    movie,
    favorited,
    savedMoviesPage,
    onLikeClick,
    onDeleteClick,
    saveMovieList,
    trailerLink
 }) {

    const [likeActive, setLikeActive] = useState(false);
    const cardLikeButtonClassname=`moviesCard__select ${favorited /*|| likeActive*/ ? '' : 'moviesCard__select_hidden'}`
    const { pathname } = useLocation();
    const movieImage = !savedMoviesPage ? `https://api.nomoreparties.co/${movie.image.url}` : movie.image ?? thumbImgPlaceholder;

    const handleLikeClick = () => {
        const saveMovie = {
            country: movie.country || 'Unknown',
            director: movie.director || 'Unknown',
            duration: movie.duration,
            year: movie.year,
            description: movie.description,
            image: `https://api.nomoreparties.co/${movie.image.url}`,
            trailerLink: movie.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
            movieId: movie.id,
            nameRU: movie.nameRU || 'Unknown',
            nameEN: movie.nameEN || 'Unknown'
        };

        onLikeClick(saveMovie);
        setLikeActive(true);
    }

    const handleDeleteClick = () => {
        onDeleteClick(movie)
    }

    return (
        <li className="moviesCard">
            
                <div className="moviesCard__container">
                <a className='moviesCard__trailer-link' href={trailerLink} target="blank">
                    <img className="moviesCard__img" src={movieImage} alt={'film'} />
                </a>
                </div>
                <div className="moviesCard__description">
                    <h2 className="moviesCard__title">{movie.nameRU || movie.nameEN}</h2>
                  
                   
                   <button type="button" className={`${pathname !== '/saved-movies' ? 'moviesCard__contain-select' : 'moviesCard__contain-select_hidden'}`} onClick={!favorited ?  handleLikeClick : handleDeleteClick}>
                        <div className={cardLikeButtonClassname}></div>
                    </button>
                   
                   <button type="button" className={`${pathname !== '/saved-movies' ? 'moviesCard__contain-select_hidden' : 'moviesCard__delete'}`} onClick={handleDeleteClick} />
 </div>
                <div className="moviesCard__duration">{transformDurationTime(movie.duration)}</div>
            
        </li>
    )
}