import { fetchTrendingMovies } from 'components/TmdbApi';
import { useState, useEffect } from 'react';
import MovieList from 'components/MovieList';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movieList, setMovieList] = useState([
    // { id: 1, title: 'dert sghj jfhhfu fh' },
    // { id: 2, title: 'derts ghj jfh hf ufh' },
    // { id: 3, title: 'der tsghj jf hhfufh' },
    // { id: 4, title: 'de rtsghj jfhhfufh' },
    // { id: 5, title: 'der tsghj jfh hfufh' },
    // { id: 6, title: 'de  rtsg hj jfh hfu  fh' },
    // { id: 7, title: 'dert sghj jfh hfufh' },
  ]);
  const location = useLocation();

  useEffect(() => {
    console.log('home');
    const responce = fetchTrendingMovies();
    responce.then(res => setMovieList(res));
  }, []);

  return <MovieList movies={movieList} state={{ from: location }} />;
};

export default Home;
