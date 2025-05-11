import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import styled from 'styled-components'

const Appcolumn = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 1000px;
min-height: 100%;
margin: 0 auto;
background-color: #ffffff;
`;

const Content = styled.div`
padding: 120px 20px;
`;

const H2 = styled.h2`
text-align: center;
`;

export function App() {

  return (
    <>
      <Appcolumn>
        <Header />
        <div>Hello</div>
        <Content>
          <H2>Контент страницы</H2>
          <i className="fa fa-address-book" aria-hidden="true" />
          <i className="fa fa-free-code-camp" aria-hidden="true" style={{ fontSize: '48px', color: 'orangered' }} />
          <Routes>
            <Route path="/" element={<div>Главная страница</div>} />
            <Route path="/login" element={<div>Авторизация</div>} />
            <Route path="/register" element={<div>Регистрация</div>} />
            <Route path="/users" element={<div>Пользователи</div>} />
            <Route path="/post" element={<div>Новая статья</div>} />
            <Route path="/post/:postID" element={<div>Статья</div>} />
            <Route path="*" element={<div>Ошибка</div>} />
          </Routes>
        </Content>
        <Footer />
      </Appcolumn>
    </>
  )
}


