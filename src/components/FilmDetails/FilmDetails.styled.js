import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const GoBackBtn = styled(Link)`
  padding: 8px;
  width: 50px;
  display: flex;
  align-items: center;
  transition: color 300ms linear;

  &:hover {
    color: #ff6c00;
  }
`;

export const FilmWrap = styled.div`
  display: flex;
  border-bottom: 1px solid #222;
  padding-bottom: 15px;
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
`;

export const Text = styled.p`
  margin-bottom: 36px;
`;

export const InfoWrap = styled.div`
  padding: 36px 0 15px;
  border-bottom: 1px solid #222;
`;

export const JumpLink = styled(Link)`
  font-weight: 500;
  margin-bottom: 15px;
  padding: 5px 10px;
  margin-left: 15px;
  border-radius: 5px;
  border: 2px solid #000;
  transition: border-color 300ms linear;

  &:hover {
    border-color: #ff6c00;
  }
`;
