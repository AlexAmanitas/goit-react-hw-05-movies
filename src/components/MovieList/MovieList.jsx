import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  if (movies.length === 1) return;

  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
