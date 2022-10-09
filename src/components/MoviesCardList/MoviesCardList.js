import React from "react";
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
console.log(movies);

    const checkIsFavorited = (saveMovieList, movie) => {
       /* return saveMovieList.find((favoritedMovie) => favoritedMovie.movieId === movie.id);*/
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
                            />
                        ))
                        .slice(0, listLength)
                )}
            </ul>

            <div className="moviesCardList__more">
                <button type="button" className="moviesCardList__more-btn" onClick={getMoreMovies}>Ещё</button>
            </div>
        </section>
    )
}

