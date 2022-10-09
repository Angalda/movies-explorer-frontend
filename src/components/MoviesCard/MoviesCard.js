import React from "react";
import { useLocation } from 'react-router-dom';
import thumbImgPlaceholder from "../../images/films/placeholder.jpg";



export default function MoviesCard({
    movie,
    favorited,
    savedMoviesPage,
    onLikeClick,
    onDeleteClick }) {

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

        onLikeClick(saveMovie)
    }

    const handleDeleteClick = () => {
        onDeleteClick(movie)
    }

    console.log(movie);
    return (
        <li className="moviesCard">
            <div className="moviesCard__container">
                <img className="moviesCard__img" src={movieImage} alt={'film'} />
            </div>
            <div className="moviesCard__description">
                <h2 className="moviesCard__title">{movie.nameRU || movie.nameEN}</h2>
                <button  type="button" className={`${pathname !== '/saved-movies' ? 'moviesCard__contain-select' : 'moviesCard__contain-select_hidden'}`} onClick={handleLikeClick}>
                    <div className={`moviesCard__select ${!favorited ? 'moviesCard__select_hidden' : ''}`}></div>
                </button>
                <button  type="button" className={`${pathname !== '/saved-movies' ? 'moviesCard__contain-select_hidden' : 'moviesCard__delete'}`} onClick={handleDeleteClick}>
                    <div className={`moviesCard__select ${!favorited ? 'moviesCard__select_hidden' : ''}`}></div>
                </button>
            </div>
            <div className="moviesCard__duration">{movie.duration}</div>

        </li>
    )
}