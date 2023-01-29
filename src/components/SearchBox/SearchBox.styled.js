import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 1200px;
  margin: 10px auto;
`;

export const Input = styled.input`
  font-size: 17px;
  padding: 5px 0 5px 15px;
  width: 250px;
  background-color: #ededed;
  width: 250px;
  border: none;
  outline: none;
  margin-right: auto;
`;

export const SearchBtn = styled.button`
  font-size: 17px;
  padding: 5px;
  background-color: #eee;
  border: none;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: #ff6c00;
    color: #fff;
  }
`;
