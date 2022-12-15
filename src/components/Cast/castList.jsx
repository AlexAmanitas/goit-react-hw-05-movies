export function CastList({ cast }) {
  return cast.map(el => (
    <li key={el.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
        alt={el.name}
      />
      <p>Name: {el.name}</p>
      <p>Character: {el.character}</p>
    </li>
  ));
}

export function ReviewList({ review }) {
  console.log(review);
  return review.map(el => (
    <li key={el.id}>
      <p>Author:{el.author}</p>
      <p>{el.content}</p>
    </li>
  ));
}
