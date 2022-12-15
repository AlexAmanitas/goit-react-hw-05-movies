import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoBackBtn = styled(Link)`
  width: 50px;
  display: flex;
  align-items: center;
  color: #333;
`;

export const FilmWrap = styled.div`
  display: flex;
`;

export const DescriptionWrap = styled.div`
  padding: 50px;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 30px;
`;

export const PostTitle = styled.h3`
  margin-bottom: 20px;
  margin-top: 36px;
`;

export const Text = styled.p`
  margin-bottom: 36px;
`;

export const JumpLink = styled(Link)`
  margin-bottom: 15px;
  color: #222;
  padding: 0 7px;
  margin-left: 15px;
  border-radius: 5px;
  border: 1px solid #555;
  transition: border-color 300ms linear, color 300ms linear;

  &:hover {
    border-color: orange;
    color: blue;
  }
`;
