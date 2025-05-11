import { ControlPanel, Logo } from './components'
import styled from "styled-components";

const Description = styled.div`
font-style: italic;
`;

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
    <Description>Веб-технологии<br />Написание кода<br />Разбор ошибок</Description>
    <ControlPanel />
  </header>
);

export const Header = styled(HeaderContainer)`
padding: 20px 40px 0;
display: flex;
justify-content: space-between;
position: fixed;
top: 0;
width: 1000px;
height: 120px;
background-color: #ffffff;
box-shadow: 0px 0px 16px #000000;
`;