import confetti from 'canvas-confetti';
import { useCallback } from 'react';
import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const onClick = useCallback(() => {
    confetti({
      particleCount: 300,
      angle: 180,
      spread: 120,
      startVelocity: 45,
      origin: {
        x: 0.35,
        y: 0.08,
      },
      drift: 2,
      ticks: 300,
    });
  }, []);

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></Input>
      <SearchBtn type="submit" onClick={onClick}>
        Search
      </SearchBtn>
    </SearchForm>
  );
};
export default SearchBox;
