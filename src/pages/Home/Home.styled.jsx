import { InfoItem, InfoLink } from 'pages/MovieDetails/MovieDetails.styled';
import { styled } from 'styled-components';

export const HomeTitle = styled.h1`
  margin-bottom: 24px;
`;

export const MovieListItem = styled(InfoItem)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const MovieLink = styled(InfoLink)`
  color: #0f0f94;
`;
