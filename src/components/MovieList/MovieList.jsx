import { Link, useLocation } from 'react-router-dom';
import { Element, List } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return <h3>Internal Server Error</h3>;
  }
  if (movies.length === 1) return;

  return (
    <List>
      {movies.map(el => (
        <Element key={el.id}>
          <Link
            to={`/goit-react-hw-05-movies/movies/${el.id}`}
            state={{ from: location }}
          >
            {el.title}
          </Link>
        </Element>
      ))}
    </List>
  );
};

export default MovieList;
