import { fetchMoviesDetails } from '../TmdbApi';
import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
// import Cast from 'components/Cast';
import { ImArrowLeft2 } from 'react-icons/im';

import {
  GoBackBtn,
  FilmWrap,
  DescriptionWrap,
  Title,
  PostTitle,
  Text,
  Container,
  JumpLink,
} from './FilmDetails.styled';

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  console.log('FilmsDetails');

  useEffect(() => {
    // console.log('object');
    const responce = fetchMoviesDetails(movieId);
    responce.then(res => setMovieDetails(res));
  }, [movieId]);

  if (!movieDetails) return;

  const { poster_path, title, release_date, overview, genres } = movieDetails;
  console.log('id', movieDetails, movieId);
  const ferGenres = genres.map(el => el.name).join(', ');

  return (
    <Container>
      <GoBackBtn to={backLinkHref}>
        <ImArrowLeft2 /> Back
      </GoBackBtn>
      <FilmWrap>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
          }
          alt=""
          width="350"
        />
        <DescriptionWrap>
          <Title>{` ${title} (${release_date.slice(0, 4)})`}</Title>
          <PostTitle>Overview</PostTitle>
          <Text>{overview}</Text>
          <PostTitle>Genres</PostTitle>
          <Text>{ferGenres}</Text>
        </DescriptionWrap>
      </FilmWrap>
      <PostTitle>Additional information</PostTitle>
      <JumpLink to="cast">Cast</JumpLink>
      <JumpLink to="review">Review</JumpLink>
      <Outlet />
    </Container>
  );
};

export default FilmDetails;
