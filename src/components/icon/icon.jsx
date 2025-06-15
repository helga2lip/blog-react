import styled from "styled-components";
import PropTypes from "prop-types";

const IconContainer = ({ className, id, inactive, ...props }) => (
  <div className={className} {...props}>
    <i className={`fa ${id}`} aria-hidden="true" />
  </div>
);

export const Icon = styled(IconContainer)`
margin: ${({ margin = '0' }) => margin};
font-size: ${({ size = '24px' }) => size};
color: ${({ disabled }) => disabled ? '#cccccc' : '#000000'};

&:hover {
cursor: ${({ inactive }) => inactive ? 'default' : 'pointer'};
}
`;

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
}