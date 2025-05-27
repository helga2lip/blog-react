import { useState } from "react";
import { Comment } from './components'
import styled from "styled-components";
import { Icon } from "../../../../components";

const CommentsContainer = ({ className, comments }) => {
  const [newComment, setNewComment] = useState('');

  return <div className={className}>
    <div className="new-comment">
      <textarea value={newComment} placeholder="Комментарий..." onChange={({ target }) => setNewComment(target.value)}></textarea>
      <Icon
        id="fa-paper-plane-o"
        margin="0 10px 0 0"
        onClick={() => { }} />
    </div>
    <div className="comments">
      {comments.map(({ id, author, content, publishedAt }) => {
        <Comment key={id} id={id} author={author} content={content} publishedAt={publishedAt} />
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