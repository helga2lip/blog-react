import styled from "styled-components";

const IconContainer = ({ className, id, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true" />
  </div>
);

export const Icon = styled(IconContainer)`
margin: ${({ margin = '0' }) => margin};
font-size: ${({ size = '24px' }) => size};

&:hover {
cursor: pointer;
}
`;