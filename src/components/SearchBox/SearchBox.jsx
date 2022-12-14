import ConfettiButton from 'components/ConfettiButton';

const SearchBox = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={e => {
          onChange(e.target.value);
        }}
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></input>
      <ConfettiButton type="submit" text="Search" icon="false"></ConfettiButton>
    </form>
  );
};
export default SearchBox;
