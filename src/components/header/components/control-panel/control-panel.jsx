import { Icon, Button } from '../../../../components'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { selectUserRole, selectUserLogin, selectUserSession } from '../../../../selectors'
import { ROLE } from '../../../../constants'
import { logOut } from '../../../../actions'
import styled from 'styled-components'


const RightAligned = styled.div`
display: flex;
justify-content: flex-end;
`;

const StyledIcon = styled.div`
&:hover {
cursor: pointer;
}
`;

const ControlPanelContainer = ({ className }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const roleID = useSelector(selectUserRole);
  const login = useSelector(selectUserLogin);
  const session = useSelector(selectUserSession);

  return (
    <div className={className}>
      <RightAligned>
        <Button>
          {roleID === ROLE.GUEST
            ? <Link to="./login">Войти</Link>
            :
            <>
              <div>{login}</div>
              <StyledIcon onClick={() => dispatch(logOut(session))}>
                <Icon id="fa-sign-out" margin="10px 0 0 0" />
              </StyledIcon>
            </>}
        </Button>
      </RightAligned>
      <RightAligned>
        <StyledIcon onClick={() => navigate(-1)}>
          <Icon id="fa-backward" margin="10px 0 0 0" />
        </StyledIcon>
        <Link to="post"><Icon id="fa-file-text-o" margin="10px 0 0 20px" /></Link>
        <Link to="users"><Icon id="fa-users" margin="10px 0 0 20px" /></Link>
      </RightAligned>
    </div>
  )
}

export const ControlPanel = styled(ControlPanelContainer)`

`;