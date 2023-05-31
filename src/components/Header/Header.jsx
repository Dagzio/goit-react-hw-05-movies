import { Headerbar, HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <Headerbar>
      <HeaderLink to={'/'}>Home</HeaderLink>

      <HeaderLink to={'movies'}>Movies</HeaderLink>
    </Headerbar>
  );
};

export default Header;
