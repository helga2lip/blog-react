import { Icon } from "../../../../components";
import { useDispatch } from 'react-redux'
import { TableRow } from '../table-row/table-row'
//import { ROLE } from '../../../../constants';
import styled from "styled-components";

const UserRowContainer = ({ className, login, registeredAt, roleId: userRoleId }) => {

  const roles = [];
  const onRoleChange = () => { };
  const dispatch = useDispatch();

  return (
    <div className={className}>
      <TableRow>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={userRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option value={roleId}>{roleName}</option>
            ))}
          </select>
          <Icon id="fa-floppy-o" margin="10px 0 0 0" onClick={() => dispatch(/*Action to do*/)} />
        </div>
      </TableRow>
      <Icon id="fa-trash-o" margin="10px 0 0 0" onClick={() => dispatch(/*Action to do*/)} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`

`;