import { fetchMoviesCredits } from 'components/TmdbApi';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const movieId = useParams();
  const [castInfo, setCastInfo] = useState([]);

  useEffect(() => {
    fetchMoviesCredits(movieId).then(res => setCastInfo(res));
  }, [movieId]);

  if (!castInfo) return;

  console.log(castInfo);

  return <p>Castinfhggp</p>;
};

export default Cast;
