import { Logo } from './components'
import styled from "styled-components";

const HeaderContainer = ({ className }) => (
  <header className={className}>
    <Logo />
  </header>
);

export const Header = styled(HeaderContainer)`
padding: 20px 40px 0;
position: fixed;
top: 0;
width: 1000px;
height: 120px;
background-color: #ffffff;
box-shadow: 0px 0px 16px #000000;
`;