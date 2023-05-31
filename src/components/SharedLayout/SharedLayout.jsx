import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default SharedLayout;
