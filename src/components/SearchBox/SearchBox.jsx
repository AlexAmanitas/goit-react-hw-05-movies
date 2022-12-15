// import ConfettiButton from '../ConfettiButton/ConfettiButton';

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
      <button type="submit">Search</button>
      {/* <ConfettiButton type="submit" text="Search" icon="false"></ConfettiButton> */}
    </form>
  );
};
export default SearchBox;
