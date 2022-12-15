import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  // console.log(movies);
  if (movies.length === 1) return;

  console.log('MovieList');

  return (
    <ul>
      {movies.map(el => (
        <li key={el.id}>
          <Link to={`/movies/${el.id}`} state={{ from: location }}>
            <img
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w500${el.poster_path}`
                  : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
              }
              alt=""
              width="50"
            />
            {el.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
