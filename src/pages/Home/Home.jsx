import { fetchTrendingMovies } from 'Api';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetchTrendingMovies().then(response => setMovies(response.data.results));
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link to={`movies/${movie.id}`}>{movie.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Home;
