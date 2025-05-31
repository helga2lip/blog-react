import styled from "styled-components";

const IconContainer = ({ className, id, onClick, ...props }) => (
  <div className={className} onClick={onClick} {...props}>
    <i className={`fa ${id}`} aria-hidden="true" />
  </div>
);

export const Icon = styled(IconContainer)`
margin: ${({ margin = '0' }) => margin};
font-size: ${({ size = '24px' }) => size};
color: ${({ disabled }) => disabled ? '#cccccc' : '#000000'};

&:hover {
cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
}
`;