import { H2, Icon } from '../../../../components'
import { SpecialPanel } from '../special-panel/special-panel'
import { useNavigate } from 'react-router-dom'
import styled from "styled-components";
import { PROP_TYPE } from '../../../../constants';

const PostContentContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
  const navigate = useNavigate();

  return (<div className={className}>
    <img src={imageUrl} alt={title} />
    <H2>{title}</H2>
    <SpecialPanel
      id={id}
      publishedAt={publishedAt}
      margin="-20px 0 20px"
      editButton={<Icon
        id="fa-pencil-square-o"
        margin="0 10px 0 0"
        onClick={() => navigate(`/post/${id}/edit`)} />}
    />
    <div className="post-text">{content}</div>
  </div>)
};

export const PostContent = styled(PostContentContainer)`

& img {
margin: 0 24px 10px 0;
float: left;
}

& .post-text {
  white-space: pre-line;
}
`;

PostContent.propTypes = {
  post: PROP_TYPE.POST.isRequired,
}