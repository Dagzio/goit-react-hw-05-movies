import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieById } from 'Api';
import {
  MovieInfoWrapper,
  MovieInfo,
  MovieImage,
  MovieTitle,
  ListItem,
  GenreList,
  GenreListItem,
  AdditionalInfo,
  InfoLink,
  InfoItem,
  GoBackButton,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieData, setMovieData] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetchMovieById(movieId).then(response => setMovieData(response.data));
  }, [movieId]);
  console.log(movieData);
  return (
    <>
      <GoBackButton to={backLinkHref}>Go Back</GoBackButton>
      <MovieInfoWrapper>
        <MovieImage
          src={
            movieData.poster_path &&
            `https://image.tmdb.org/t/p/original/${movieData.poster_path}`
          }
          width="280"
          height="400"
          alt={movieData.title}
        />
        <MovieInfo>
          <MovieTitle>
            {movieData.title} ({movieData.release_date?.slice(0, 4)})
          </MovieTitle>
          <ul>
            <ListItem>
              <p>User score: {(movieData.vote_average * 10).toFixed(0)}%</p>
            </ListItem>
            <ListItem>
              <h2>Overview</h2>
              <p>{movieData.overview}</p>
            </ListItem>
            <ListItem>
              <h3>Genres</h3>
              <GenreList>
                {movieData.genres?.map(genre => (
                  <GenreListItem key={genre.id}>{genre.name}</GenreListItem>
                ))}
              </GenreList>
            </ListItem>
          </ul>
        </MovieInfo>
      </MovieInfoWrapper>
      <AdditionalInfo>
        <ul>
          <InfoItem>
            <InfoLink to={'cast'}>Cast</InfoLink>
          </InfoItem>
          <InfoItem>
            <InfoLink to={'reviews'}>Reviews</InfoLink>
          </InfoItem>
        </ul>
      </AdditionalInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;
