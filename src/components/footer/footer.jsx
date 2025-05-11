import styled from "styled-components"

const FooterContainer = ({ className }) => {
  return (
    <div className={className}>
      <div>
        <div>Блог веб-разработчика</div>
        <div>web@developer.ru</div>
      </div>
      <div>
        <div>Нижний Новгород, {new Date().toLocaleString('ru', { day: 'numeric', month: 'long' })}</div>
        <div>18 градусов, облачно</div>
      </div>
    </div>
  )
}

export const Footer = styled(FooterContainer)`
padding: 20px 40px;
width: 1000px;
height: 120px;
display: flex;
justify-content: space-between;
align-items: center;
font-weight: bold;
background-color: #ffffff;
box-shadow: 0px 2px 16px #000000;
`;