import MovieList from 'components/MovieList';
import SearchBox from 'components/SearchBox';
import { fetchSearchMovie } from 'components/TmdbApi';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([{}]);
  const searchQuery = searchParams.get('query');

  const handleChange = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchParams({ query: evt.target[0].value });
  };

  useEffect(() => {
    // console.log(searchParams);
    if (!searchQuery) return;
    const responce = fetchSearchMovie(searchQuery);
    responce.then(res => setMovieList(res));
  }, [searchQuery]);

  return (
    <>
      <SearchBox
        value={searchQuery}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
      <MovieList movies={movieList} />
    </>
  );
};
export default Movies;
