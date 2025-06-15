import styled from "styled-components"
import { Icon } from "../../../../../../components";
import { useDispatch, useSelector } from "react-redux";
import { openModal, CLOSE_MODAL, removeCommentAsync } from "../../../../../../actions";
import { useServerRequest } from "../../../../../../hooks";
import { selectUserRole } from "../../../../../../selectors";
import PropTypes from "prop-types";
import { ROLE } from "../../../../../../constants";

const CommentContainer = ({ className, postId, id, author, publishedAt, content }) => {
  const dispatch = useDispatch();
  const requestServer = useServerRequest();
  const userRole = useSelector(selectUserRole);

  const onCommentRemove = (id) => {
    dispatch(openModal({
      text: 'Удалить комментарий?',
      onConfirm: () => {
        dispatch(removeCommentAsync(requestServer, postId, id))
        dispatch(CLOSE_MODAL)
      },
      onCancel: () => dispatch(CLOSE_MODAL),
    }))
  }

  const isAdminOrModerator = [ROLE.ADMIN, ROLE.MODERATOR].includes(userRole);

  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author"><Icon
            id="fa-user-circle-o"
            inactive={true}
            margin="0 10px 0 0"
            size="18px"
            onClick={() => { }} />{author}</div>
          <div className="publishedAt"><Icon
            id="fa-calendar-o"
            inactive={true}
            margin="0 10px 0 0"
            size="18px"
            onClick={() => { }} />{publishedAt}</div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      {isAdminOrModerator && <Icon
        id="fa-trash-o"
        margin="0 10px 0 10px"
        onClick={() => onCommentRemove(id)} />}
    </div>
  )
}

export const Comment = styled(CommentContainer)`
display: flex;
margin-top: 10px;

& .comment {
  padding: 5px 10px;
  border: 1px solid black;
  width: 536px; 
}

& .information-panel {
display: flex;
justify-content: space-between;
}

& .author {
display: flex;
}
& .publishedAt {
display: flex;
}
`;

Comment.propTypes = {
  postId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
}