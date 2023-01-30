import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  border-bottom: 1px solid #555;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  color: #555;
  font-size: 17px;
  margin-left: 20px;

  &.active {
    color: orange;
  }
`;

export const Nav = styled.nav`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
