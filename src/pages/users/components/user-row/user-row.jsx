import { Icon } from "../../../../components";
import { useDispatch } from 'react-redux'
import { TableRow } from '../table-row/table-row'
//import { ROLE } from '../../../../constants';
import styled from "styled-components";
import { useState } from "react";

const UserRowContainer = ({ className, login, registeredAt, roleId, roles }) => {
  const [selectedRoleId, setSelectedRoleId] = useState(roleId);

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };
  const dispatch = useDispatch();

  const isSaveButtonDisabled = selectedRoleId === roleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>{roleName}</option>
            ))}
          </select>
          <div className="save-role-button">
            <Icon id="fa-floppy-o" margin="0 0 0 10px" disabled={isSaveButtonDisabled} onClick={() => dispatch(/*Action to do*/)} />
          </div>
        </div>
      </TableRow>
      <Icon id="fa-trash-o" margin="10px 0 0 0" onClick={() => dispatch(/*Action to do*/)} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
margin-top: 10px;
display: flex;
gap: 10px;

& select {
padding: 0 5px;
font-size: 16px;
}
`;