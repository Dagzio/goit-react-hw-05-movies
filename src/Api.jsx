import axios from 'axios';

const searchOptions = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'a37b3b15e148680ce30d993973b79f85',
};

export const fetchTrendingMovies = () => {
  const { BASE_URL, API_KEY } = searchOptions;
  return axios.get(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`);
};

export const fetchMovieById = movieId => {
  const { BASE_URL, API_KEY } = searchOptions;
  return axios.get(`${BASE_URL}movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchCastOrReviews = (movieId, option) => {
  const { BASE_URL, API_KEY } = searchOptions;
  return axios.get(
    `${BASE_URL}movie/${movieId}/${option}?api_key=${API_KEY}&page=1`
  );
};

export const fetchMovieByName = query => {
  const { BASE_URL, API_KEY } = searchOptions;
  return axios.get(
    `${BASE_URL}search/movie?query=${query}&api_key=${API_KEY}&page=1`
  );
};
