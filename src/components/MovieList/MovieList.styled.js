import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

export const Element = styled.li`
  margin-left: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const FilmImage = styled.img`
  border-radius: 3px;
`;

export const FilmLink = styled(Link)`
  font-size: 19px;
  margin-left: 15px;
  font-weight: 500;
  color: #222;
`;
