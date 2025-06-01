import { Route, Routes } from 'react-router-dom'
import { Header, Footer, Modal } from './components'
import { Authorization, Registration, Users, Post, Main } from './pages'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { setUser } from './actions'
import { useLayoutEffect } from 'react';

const Appcolumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 1000px;
min-height: 100%;
margin: 0 auto;
background-color: #ffffff;
`;

const Page = styled.div`
padding: 120px 20px 20px;
`;

export function App() {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const currentUserDataJSON = sessionStorage.getItem('userData')

    if (!currentUserDataJSON) return;

    const currentUserData = JSON.parse(currentUserDataJSON);

    dispatch(setUser({
      ...currentUserData,
      roleId: Number(currentUserData.roleId)
    }));
  }, [dispatch]);

  return (
    <>
      <Appcolumn>
        <Header />
        <div>Hello</div>
        <Page>
          <Routes>
            <Route path="/" element={<div>{<Main />}</div>} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/users" element={<Users />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/post/:id/edit" element={<Post />} />
            <Route path="*" element={<div>Ошибка</div>} />
          </Routes>
        </Page>
        <Footer />
        <Modal />
      </Appcolumn>
    </>
  )
}


