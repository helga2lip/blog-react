import styled from 'styled-components';
import { H2 } from '../h2/h2'
import { PROP_TYPE } from '../../constants';

const Div = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Error = ({ error }) =>
  error && <Div>
    <H2>Ошибка</H2>
    <div>{error}</div>
  </Div>

Error.propTypes = {
  error: PROP_TYPE.ERROR,
}