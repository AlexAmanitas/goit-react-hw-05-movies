import ConfettiButton from 'components/ConfettiButton';

const SearchBox = ({ onSubmit }) => {
  console.log('searcBox');
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></input>
      <ConfettiButton type="submit" text="Search" icon="false"></ConfettiButton>
    </form>
  );
};
export default SearchBox;
