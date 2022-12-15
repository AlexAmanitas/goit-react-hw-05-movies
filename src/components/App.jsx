import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import AppBar from 'components/AppBar';
import Home from 'pages/Home';

// import Movies from '../pages/Movies/Movies';
import Cast from 'components/Cast';
import Review from 'components/Reviews';
// import FilmDetails from './FilmDetails/FilmDetals';

const FilmDetails = lazy(() => import('./FilmDetails/FilmDetals'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="movies/:movieId" element={<FilmDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

//  - / Home { Trending Film list }    !!!  Go Back Button  !!!
//   - / FilmDetails /movies/id {Img, Name, Year, UserScore, Overview, Genres}
//    - / Cast {Img, Name, Character}
//    - / Reviews {if none("We don't have any reviews for this movie"), else {Author, Text}}
//   - / Movies {Search Form}
//    - /QueryList{Film list with search query}
//     - / FilmDetails {Img, Name, Year, UserScore, Overview, Genres}
//      - / Cast {Img, Name, Character}
//      - / Reviews {if none("We don't have any reviews for this movie"), else {Author, Text}}
