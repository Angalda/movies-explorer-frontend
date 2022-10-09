const MAX_SHORTMOVIES_DURATION = 40;

// Фильтрация фильмов по запросу
const filterMovies = (movies, searchPhrase, shortMoviesHandler) => {
  const moviesByQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userRequest = searchPhrase.toLowerCase().trim();
    return movieRu.indexOf(userRequest) !== -1 || movieEn.indexOf(userRequest) !== -1;
  });

  if (shortMoviesHandler) {
    return moviesByQuery.filter((movie) => movie.duration <= MAX_SHORTMOVIES_DURATION);
  } else {
    return moviesByQuery;
  }
};

// Фильтрация по длительности
const filterShortMovies = (movies) => {
  return movies.filter((movie) => movie.duration < MAX_SHORTMOVIES_DURATION);
};

// Преобразуем общее время в минутах в часы + минуты
const transformDurationTime = (duration) => {
  const hours = Math.floor(duration / 60);
  const minutes = duration - hours * 60;
  if(hours > 0) {
    return `${hours}ч ${minutes}м`;
  } else {
    return `${minutes}м`;
  }
};

export {
  filterMovies,
  filterShortMovies,
  transformDurationTime,
};