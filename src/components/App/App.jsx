import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import Cast from 'src/components/Cast/Cast.jsx';
import Reviews from 'src/components/Reviews/Reviews.jsx';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import SharedLayout from 'components/SharedLayout/SharedLayout';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
export default App;
