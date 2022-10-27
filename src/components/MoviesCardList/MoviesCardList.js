import React, { useEffect, useState } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";


export default function MoviesCardList({
    movies,
    savedMoviesPage,
    onLikeClick,
    onDeleteClick,
    saveMovieList,
    emptySearchResult,
    listLength,
    getMoreMovies
}) {


    const checkIsFavorited = (saveMovieList, movie) => {
        return saveMovieList.find((element) => element.movieId === movie.id);
    }; 

      
    return (

        <section className="moviesCardList">

            <ul className="moviesCardList__list">
                {emptySearchResult ? (
                    <h1 className="movie-list__not-found">Ничего не найдено</h1>
                ) : (
                    movies
                        .map((movie) => (
                            
                            <MoviesCard
                                key={movie.id || movie._id}
                                movie={movie}
                                favorited={checkIsFavorited(saveMovieList, movie)}
                                savedMoviesPage={savedMoviesPage}
                                onLikeClick={onLikeClick}
                                onDeleteClick={onDeleteClick}
                                saveMovieList={saveMovieList}
                                trailerLink={movie.trailerLink}
                            />
                        ))
                        .slice(0, listLength)
                )}
            </ul>
            
            <div className={`moviesCardList__more ${emptySearchResult ? 'moviesCardList__more_hidden' : ''}`}>
                {movies.length>listLength ? (
                <button type="button" className="moviesCardList__more-btn" onClick={getMoreMovies}>Ещё</button>
                ) : ("")}
                
            </div>
            
        </section>
    )
}

