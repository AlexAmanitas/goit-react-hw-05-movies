import confetti from 'canvas-confetti';
import { useCallback } from 'react';
import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const onClick = useCallback(() => {
    confetti({
      particleCount: 500,
      angle: 60,
      spread: 50,
      startVelocity: 75,
      origin: {
        x: 0,
        y: 1,
      },
      drift: 5,
      ticks: 400,
      // scalar: 0.8,
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
      {/* <SearchBtn type="submit" text="Search" icon="false"></SearchBtn> */}
    </SearchForm>
  );
};
export default SearchBox;
