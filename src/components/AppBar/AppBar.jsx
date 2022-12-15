import { Outlet } from 'react-router-dom';
import { Header, Nav, StyledLink } from './AppBar.styled';

const AppBar = () => {
  console.log('AppBar');
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
};

export default AppBar;
