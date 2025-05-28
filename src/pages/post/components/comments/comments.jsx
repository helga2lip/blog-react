import { useState } from "react";
import { Comment } from './components'
import styled from "styled-components";
import { Icon } from "../../../../components";
import { selectUserId } from '../../../../selectors'
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from '../../../../hooks'
import { addCommentAsync } from '../../../../actions'

const CommentsContainer = ({ className, comments, postId }) => {
  const [newComment, setNewComment] = useState('');
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const requestServer = useServerRequest();

  const onNewCommentAdd = (userId, postId, content) => {
    dispatch(addCommentAsync(requestServer, userId, postId, content))
  }
  return <div className={className}>
    <div className="new-comment">
      <textarea name="comment" value={newComment} placeholder="Комментарий..." onChange={({ target }) => setNewComment(target.value)}></textarea>
      <Icon
        id="fa-paper-plane-o"
        margin="0 10px 0 0"
        onClick={() => onNewCommentAdd(userId, postId, newComment)} />
    </div>
    <div className="comments">
      {comments.map(({ id, author, content, publishedAt }) => {
        return <Comment key={id} id={id} author={author} content={content} publishedAt={publishedAt} />
      })}
    </div>
  </div >
};

export const Comments = styled(CommentsContainer)`
margin: 20px auto;
display: flex;
width: 580px;

& .new-comment {
margin: 20px 0 0;
display: flex;
gap: 10px;
width: 100%;
}

& .new-comment textarea {
resize: none;
width: 100%;
height: 120px;
font-size: 18px;
}
`;