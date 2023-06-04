import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const MovieInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const MovieImage = styled.img`
  margin-right: 32px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const MovieTitle = styled.h1`
  margin-bottom: 12px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const GenreList = styled.ul`
  display: flex;
`;

export const GenreListItem = styled.li`
  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export const AdditionalInfo = styled.div`
  padding: 12px 24px;
  margin-bottom: 8px;
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`;

export const InfoItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  &:first-child {
    margin-bottom: 12px;
  }
`;

export const InfoLink = styled(Link)`
  text-decoration: none;
  color: #26269e;
`;

export const GoBackButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #000;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  background-color: #e9e9ed;
  margin-bottom: 12px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:hover {
    background-color: lightgrey;
  }

  &:active {
    box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
