import { fetchTrendingMovies } from 'Api';
import { useEffect, useState } from 'react';
import { HomeTitle, MovieLink, MovieListItem } from './Home.styled';
import { BsStars } from 'react-icons/bs';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <HomeTitle>Trending today</HomeTitle>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <MovieListItem key={movie.id}>
                <BsStars color="#d88d02" />
                <MovieLink to={`movies/${movie.id}`}>{movie.title}</MovieLink>
              </MovieListItem>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
