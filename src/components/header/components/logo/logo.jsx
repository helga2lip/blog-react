import styled from "styled-components";

const LargeText = styled.div`
margin-top: 16px;
font-size: 48px;
font-weight: 600;
line-height: 48px;
`;

const SmallText = styled.div`
font-size: 18px;
font-weight: bold;
`;

const IconContainer = ({ className }) => (
  <div className={className}>
    <i className="fa fa-code" aria-hidden="true" />
  </div>
);

const Icon = styled(IconContainer)`
margin-right: 10px;
font-size: 72px;
`;

const LogoContainer = ({ className }) => (
  <div className={className}>
    <Icon />
    <div>
      <LargeText>Блог</LargeText>
      <SmallText>веб-разработчика</SmallText>
    </div>
  </div>
)

export const Logo = styled(LogoContainer)`
      display: flex;
      `;