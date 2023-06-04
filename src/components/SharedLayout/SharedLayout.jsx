import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Main } from './SharedLayout.styled';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
