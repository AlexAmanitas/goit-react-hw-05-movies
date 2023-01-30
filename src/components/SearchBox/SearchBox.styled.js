import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 1200px;
  margin: 10px auto;
`;

export const Input = styled.input`
  font-size: 17px;
  padding: 5px 0 5px 15px;
  width: 250px;
  border-radius: 6px 0 0 6px;
  background-color: #ddd;
  width: 250px;
  border: none;
  outline: none;
  margin-right: auto;
`;

export const SearchBtn = styled.button`
  font-size: 17px;
  padding: 5px;
  background-color: #ddd;
  color: #222;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 300ms linear, color 300ms linear;

  &:hover {
    background-color: orange;
  }
`;
