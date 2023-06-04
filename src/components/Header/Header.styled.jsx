import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Headerbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  display: flex;
  align-items: center;
  height: 64px;
  padding: 12px 24px;
  margin-bottom: 16px;
  z-index: 1100;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: 600;
  &:first-child {
    margin-right: 12px;
  }
  &.active {
    color: #d88d02;
  }
`;
