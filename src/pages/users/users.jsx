import styled from "styled-components";
import { H2 } from "../../components";
//import { useDispatch } from 'react-redux'
import { TableRow, UserRow } from './components/';
import { ROLE } from "../../constants";

const UsersContainer = ({ className }) => {
  const users = [];
  //const dispatch = useDispatch();

  return (
    <div className={className}>
      <H2>Пользователи</H2>
      <div>
        <TableRow>
          <div className="login-column">Логин</div>
          <div className="registered-at-column">Дата регистрации</div>
          <div className="role-column">Роль</div>
        </TableRow>
        {users.map(({ id, login, registeredAt, roleId: roleId }) => (
          <UserRow key={id} login={login} registeredAt={registeredAt} roleId={roleId} />
        ))}
      </div>
    </div>
  )
};

export const Users = styled(UsersContainer)`
margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column; 
  width: 570px; 
`;