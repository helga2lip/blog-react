import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

export function App() {

  const Content = styled.div`
padding: 120px 20px;
`;

  const H2 = styled.h2`
text-align: center;
`;

  const Header = () => {
    return <div>Header</div>
  }

  const Footer = () => {
    return <div>Footer</div>
  }

  return (
    <>
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
    </>
  )
}


