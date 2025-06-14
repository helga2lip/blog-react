import { Icon, Button } from '../../../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors'
import { ROLE } from '../../../../constants'
import { logOut } from '../../../../actions'
import { checkAccess } from '../../../../utils'
import styled from 'styled-components'


const RightAligned = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
`;

const UserName = styled.div`
margin: 10px 10px 0 0;
font-size: 18px;
font-weight: bold;
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleID = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  const onLogOut = () => {
    dispatch(logOut(session));
    sessionStorage.removeItem('userData')
  }

  const isAdmin = checkAccess([ROLE.ADMIN], roleID)

  return (
    <div className={className}>
      <RightAligned>
        {roleID === ROLE.GUEST
          ? <Button>
            <Link to="./login">Войти</Link>
          </Button>
          :
          <>
            <UserName>{login}</UserName>
            <Icon id="fa-sign-out" margin="10px 0 0 0" onClick={onLogOut} />
          </>}

      </RightAligned>
      <RightAligned>
        <Icon id="fa-backward" margin="10px 0 0 0" onClick={() => navigate(-1)} />
        {isAdmin &&
          (<>
            <Link to="post"><Icon id="fa-file-text-o" margin="10px 0 0 20px" /></Link>
            <Link to="users"><Icon id="fa-users" margin="10px 0 0 20px" /></Link>
          </>
          )}
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`

`;