import { H2, Content } from "../../components";
import { ROLE } from "../../constants";
import { useServerRequest } from '../../hooks'
import { TableRow, UserRow } from './components/';
import { useEffect, useState } from "react";
import styled from "styled-components";

const UsersContainer = ({ className }) => {
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  const requestServer = useServerRequest();

  useEffect(() => {
    Promise.all([
      requestServer('fetchRoles'),
      requestServer('fetchUsers')
    ]).then(([rolesResponse, usersResponse]) => {

      if (usersResponse.error || rolesResponse.error) {
        setErrorMessage(usersResponse.error || rolesResponse.error);
        return;
      }

      setUsers(usersResponse.response);
      setRoles(rolesResponse.response);
    });
  }, [requestServer])

  return (
    <div className={className}>
      <Content error={errorMessage}>
        <>
          <H2>Пользователи</H2>
          <div>
            <TableRow>
              <div className="login-column">Логин</div>
              <div className="registered-at-column">Дата регистрации</div>
              <div className="role-column">Роль</div>
            </TableRow>
            {users.map(({ id, login, registeredAt, roleId }) => (
              <UserRow
                key={id}
                login={login}
                registeredAt={registeredAt}
                roleId={roleId}
                roles={roles.filter(({ roleId }) => roleId !== ROLE.GUEST)} />
            ))}
          </div>
        </>
      </Content>
    </div>
  )
};

export const Users = styled(UsersContainer)`
margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column; 
  width: 570px; 
  font-size: 18px;
`;