import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';

// import Movies from '../pages/Movies/Movies';
// import Cast from 'components/Cast';
// import Review from 'components/Reviews';
// import FilmDetails from './FilmDetails/FilmDetals';

const FilmDetails = lazy(() => import('./FilmDetails/FilmDetals'));
const Movies = lazy(() => import('pages/Movies'));
const Cast = lazy(() => import('components/Cast'));
const Review = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* <Route path="/goit-react-hw-05-movies" element={<AppBar />} /> */}
          <Route path="/goit-react-hw-05-movies" element={<Home />}></Route>
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<Movies />}
          ></Route>
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<FilmDetails />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Suspense>
    </>
  );
};
