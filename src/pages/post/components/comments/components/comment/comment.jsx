import styled from "styled-components"
import { Icon } from "../../../../../../components";

const CommentContainer = ({ className, id, author, publishedAt, content }) => {
  return (
    <div className={className}>
      <div className="comment">
        <div className="information-panel">
          <div className="author"><Icon
            id="fa-user-circle-o"
            margin="0 10px 0 0"
            size="18px"
            onClick={() => { }} />{author}</div>
          <div className="publishedAt"><Icon
            id="fa-calendar-o"
            margin="0 10px 0 0"
            size="18px"
            onClick={() => { }} />{publishedAt}</div>
        </div>
        <div className="comment-text">{content}</div>
      </div>
      <Icon
        id="fa-trash-o"
        margin="0 10px 0 10px"
        onClick={() => { }} />

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