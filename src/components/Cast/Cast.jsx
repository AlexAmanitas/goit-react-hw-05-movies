import { fetchMoviesCredits } from '../TmdbApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastList } from './Cast.styled';
// import CastList from './castList';

const Cast = () => {
  const { movieId } = useParams();
  const [{ cast }, setCastInfo] = useState([]);

  console.log('Cast');

  useEffect(() => {
    console.log('movieID Cast', movieId);
    fetchMoviesCredits(movieId).then(res => setCastInfo(res));
  }, [movieId]);

  if (!cast) return;

  console.log(cast);

  return (
    <CastList>
      {/* <CastList cast={cast} /> */}
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={
              el.profile_path
                ? `https://image.tmdb.org/t/p/w500${el.profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            }
            alt={el.name}
            width="200"
            height="300"
          />
          <p>Name: {el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </CastList>
  );
};

export default Cast;
