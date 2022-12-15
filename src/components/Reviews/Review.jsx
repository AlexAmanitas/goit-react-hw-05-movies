import { ReviewList } from 'components/Cast/castList';
import { fetchMoviesReviews } from 'components/TmdbApi';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  // return <p>jscgaskbaskvuas review</p>;

  return (
    <ul>
      <ReviewList review={results} />
    </ul>
  );
};

export default Review;
