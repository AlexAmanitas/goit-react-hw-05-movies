import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
import Home from '../pages/Home/Home';

import Movies from '../pages/Movies/Movies';
import Cast from './Cast/Cast';
import Review from './Reviews/Review';
import FilmDetails from './FilmDetails/FilmDetals';

export const App = () => {
  return (
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
