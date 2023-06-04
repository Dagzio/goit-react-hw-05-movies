import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <Suspense>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense>
              <Movies />
            </Suspense>
          }
        />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
export default App;
