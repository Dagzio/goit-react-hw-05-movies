import { styled } from 'styled-components';

export const CastText = styled.p`
  font-weight: 700;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const CastListItem = styled.li`
  margin-bottom: 32px;
`;

export const CastImage = styled.img`
  margin-bottom: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  border-radius: 4px;
`;
