import Searchbar from 'components/Searchbar/Searchbar';
import { useEffect, useState } from 'react';
import { fetchMovieByName } from 'Api';
import { useLocation, useSearchParams } from 'react-router-dom';
import { BsStars } from 'react-icons/bs';
import { MovieLink, MovieListItem } from 'pages/Home/Home.styled';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [queryValue, setQueryValue] = useState(query);
  const location = useLocation();

  useEffect(() => {
    if (queryValue) {
      fetchMovieByName(queryValue)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error(error));
    }
  }, [queryValue]);
  const handleSubmit = searchQuery => {
    if (searchQuery) {
      setQueryValue(searchQuery);
      setSearchParams({ query: searchQuery });
    }
  };
  return (
    <div>
      <Searchbar onSubmit={handleSubmit} />
      <ul>
        {movies &&
          movies.map(movie => {
            return (
              <MovieListItem key={movie.id}>
                <BsStars color="#d88d02" />
                <MovieLink to={`${movie.id}`} state={{ from: location }}>
                  {movie.title}
                </MovieLink>
              </MovieListItem>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
