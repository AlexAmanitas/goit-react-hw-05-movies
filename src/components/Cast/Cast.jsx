import { fetchMoviesCredits } from '../TmdbApiService';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Name, Role } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [{ cast }, setCastInfo] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId).then(res => setCastInfo(res));
  }, [movieId]);

  if (!cast) return;

  return (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
            alt={el.name}
            width="150"
          />
          <Name>
            Name: <Role>{el.name}</Role>
          </Name>
          <Name>
            Character: <Role>{el.character}</Role>
          </Name>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
