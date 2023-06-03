import Searchbar from 'components/Searchbar/Searchbar';
import { useState } from 'react';
import { fetchMovieByName } from 'Api';
import { useSearchParams } from 'react-router-dom';
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  const handleSubmit = async query => {
    await fetchMovieByName(query).then(response =>
      setMovies(response.data.results)
    );
    setSearchParams({ query: query });
  };
  console.log(movies);
  return <Searchbar onSubmit={handleSubmit} />;
};

export default Movies;
