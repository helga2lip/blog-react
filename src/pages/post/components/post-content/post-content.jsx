import { H2, Icon } from '../../../../components'
import styled from "styled-components";

const PostContentContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
  return (<div className={className}>
    <img src={imageUrl} alt={title} />
    <H2>{title}</H2>
    <div className="special-panel">
      <div className="published-at">
        <Icon
          id="fa-calendar-o"
          margin="0 10px 0 0"
          onClick={() => { }} />
        {publishedAt}
      </div>
      <div className="buttons"><Icon
        id="fa-pencil-square-o"
        margin="0 10px 0 0"
        onClick={() => { }} />
        <Icon
          id="fa-trash-o"
          margin="0 10px 0 0"
          onClick={() => { }} /></div>
    </div>
    <div className="post-text">{content}</div>
  </div>)
};

export const PostContent = styled(PostContentContainer)`

& img {
margin: 0 24px 10px 0;
float: left;
}

& .special-panel {
margin: -20px 0 20px;
font-size: 18px;
display: flex;
justify-content: space-between;
}

& .published-at {
display: flex;
font-size: 18px;
}

& i {

position: relative;
top: -8px;
}

& .buttons {
display: flex;
font-size: 21px;
}
`;