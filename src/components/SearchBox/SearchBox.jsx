// import ConfettiButton from '../ConfettiButton/ConfettiButton';

import { Input, SearchBtn, SearchForm } from './SearchBox.styled';

const SearchBox = ({ onSubmit }) => {
  console.log('searcBox');
  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></Input>
      <SearchBtn type="submit">Search</SearchBtn>
      {/* <ConfettiButton type="submit" text="Search" icon="false"></ConfettiButton> */}
    </SearchForm>
  );
};
export default SearchBox;
