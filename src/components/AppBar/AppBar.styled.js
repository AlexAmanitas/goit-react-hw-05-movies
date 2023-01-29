import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  height: 50px;
  border-bottom: 1px solid #555;
  box-shadow: 0px 15px 10px -15px #111;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 21px;
  margin-left: 20px;
  font-weight: 500;

  &.active {
    color: #ff6c00;
  }
`;

export const Nav = styled.nav`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;
