import { fetchMoviesDetails } from 'components/TmdbApi';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
// import Cast from 'components/Cast';

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
    <>
      <Link to={backLinkHref}>Go Back</Link>
      <img
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt=""
        width="350"
      />
      <h2>{` ${title} (${release_date.slice(0, 4)})`}</h2>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{ferGenres}</p>
      <h3>Additional information</h3>
      <Link to="cast">Cast</Link>
      <Link to="review">Review</Link>
      <Outlet />
    </>
  );
};

export default FilmDetails;
