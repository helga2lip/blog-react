import { Icon, Input } from '../../../../components'
import { useRef } from 'react'
import { SpecialPanel } from '../special-panel/special-panel'
import { sanitizeContent } from './utils'
import { savePostAsync } from '../../../../actions'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks'

const PostFormContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitle = titleRef.current.value;
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(savePostAsync(requestServer,
      {
        id,
        imageUrl: newImageUrl,
        title: newTitle,
        content: newContent
      }))
      .then(() => navigate(`/post/${id}`));
  }

  return (<div className={className}>
    <Input defaultValue={imageUrl} placeholder="Изображение..." ref={imageRef} />
    <Input defaultValue={title} placeholder="Заголовок..." ref={titleRef} />
    <SpecialPanel
      id={id}
      publishedAt={publishedAt}
      margin="20px 0"
      editButton={<Icon
        id="fa-floppy-o"
        margin="0 10px 0 0"
        onClick={onSave} />}
    />
    <div
      className="post-text"
      contentEditable={true}
      suppressContentEditableWarning={true}
      ref={contentRef}
    >
      {content}
    </div>
  </div>)
};

export const PostForm = styled(PostFormContainer)`

& img {
margin: 0 24px 10px 0;
float: left;
}

& .post-text {
  white-space: pre-line;
}
`;