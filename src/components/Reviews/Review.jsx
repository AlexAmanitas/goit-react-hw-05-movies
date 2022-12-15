// import { ReviewList } from '../Cast/castList';
import { fetchMoviesReviews } from '../TmdbApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article, Author } from './Review.styled';

const Review = () => {
  const { movieId } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(res => setReview(res));
  }, [movieId]);

  if (!review) return <p>Error</p>;
  console.log('results', review);
  const { results } = review;
  console.log(results);
  if (results.length === 0)
    return <p>We don't have any reviews for this movie</p>;

  return (
    <ul>
      {/* <ReviewList review={results} /> */}
      {results.map(el => (
        <Article key={el.id}>
          <Author>Author: {el.author}</Author>
          <p>{el.content}</p>
        </Article>
      ))}
    </ul>
  );
};

export default Review;
