import { fetchMoviesDetails } from 'components/TmdbApi';
import { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
// import Cast from 'components/Cast';

const FilmDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    // console.log('object');
    const responce = fetchMoviesDetails(movieId);
    responce.then(res => setMovieDetails(res));
  }, [movieId]);

  if (!movieDetails) return;

  const { poster_path, title } = movieDetails;
  // console.log('id', movieDetails, movieId);

  return (
    <>
      <Link to={backLinkHref}>Go Back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
      <h2>{title}</h2>
      <p>Additional information</p>
      <Link to="cast">Cast</Link>
    </>
  );
};

export default FilmDetails;
