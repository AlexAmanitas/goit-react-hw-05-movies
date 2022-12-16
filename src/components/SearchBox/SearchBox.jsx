import confetti from 'canvas-confetti';
import { useCallback } from 'react';
import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  const onClick = useCallback(() => {
    confetti({
      particleCount: 300,
      angle: 180,
      spread: 100,
      startVelocity: 50,
      origin: {
        x: 0.35,
        y: 0.08,
      },
      drift: 2,
      ticks: 400,
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
