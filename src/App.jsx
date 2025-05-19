import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Authorization, Registration, Users } from './pages'
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

export function App() {

  return (
    <>
      <Appcolumn>
        <Header />
        <div>Hello</div>
        <Content>
          <Routes>
            <Route path="/" element={<div>Главная страница</div>} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/users" element={<Users />} />
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


