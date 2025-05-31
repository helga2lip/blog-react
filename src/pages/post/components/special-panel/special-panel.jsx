import styled from "styled-components";
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Icon } from "../../../../components";
import { useServerRequest } from "../../../../hooks";

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const navigate = useNavigate();

  const onPostRemove = (id) => {
    dispatch(openModal({
      text: 'Удалить статью?',
      onConfirm: () => {
        dispatch(removePostAsync(requestServer, id)).then(() => {
          navigate('/');
        })
        dispatch(CLOSE_MODAL)
      },
      onCancel: () => dispatch(CLOSE_MODAL),
    }))
  }

  return (
    <div className={className}>
      <div className="published-at">
        {publishedAt && (<Icon
          id="fa-calendar-o"
          inactive={true}
          margin="0 10px 0 0"
        />)}
        {publishedAt}
      </div>
      <div className="buttons">
        {editButton}
        {publishedAt && (<Icon
          id="fa-trash-o"
          margin="0 10px 0 0"
          onClick={() => onPostRemove(id)} />)}</div>
    </div>
  )
};

export const SpecialPanel = styled(SpecialPanelContainer)`
margin: ${({ margin }) => margin};
font-size: 18px;
display: flex;
justify-content: space-between;

& .buttons {
display: flex;
font-size: 21px;
}

& i {
position: relative;
top: -8px;
}

& .published-at {
display: flex;
font-size: 18px;
}
`;