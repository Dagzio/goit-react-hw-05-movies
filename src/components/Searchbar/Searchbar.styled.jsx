import { styled } from 'styled-components';

export const SearchInput = styled.input`
  width: 320px;
  height: 32px;
  margin-right: 12px;
  border-radius: 10px;
  border: 1px solid lightgrey;
  padding: 8px 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 32px;
  border: transparent;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:active {
    box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    background-color: grey;
  }
`;

export const SearchbarForm = styled.form`
  margin-bottom: 24px;
`;
