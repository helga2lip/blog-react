import { Icon, Input } from '../../../../components'
import { useLayoutEffect, useRef, useState } from 'react'
import { SpecialPanel } from '../special-panel/special-panel'
import { sanitizeContent } from './utils'
import { savePostAsync } from '../../../../actions'
import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useServerRequest } from '../../../../hooks'
import { PROP_TYPE } from '../../../../constants'

const PostFormContainer = ({ className, post: { id, title, imageUrl, content, publishedAt } }) => {
  const [imageUrlValue, setImageUrlValue] = useState(imageUrl);
  const [titleValue, setTitleValue] = useState(title);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    setImageUrlValue(imageUrl);
    setTitleValue(title);
  }, [imageUrl, title]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requestServer = useServerRequest();

  const onSave = () => {
    const newContent = sanitizeContent(contentRef.current.innerHTML);

    dispatch(savePostAsync(requestServer,
      {
        id,
        imageUrl: imageUrlValue,
        title: titleValue,
        content: newContent
      }))
      .then(({ id }) => navigate(`/post/${id}`));
  }

  const onImageChange = ({ target }) => setImageUrlValue(target.value);
  const onTitleChange = ({ target }) => setTitleValue(target.value);

  return (<div className={className}>
    <Input value={imageUrlValue} placeholder="Изображение..." onChange={onImageChange} />
    <Input value={titleValue} placeholder="Заголовок..." onChange={onTitleChange} />
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
  min-height: 80px;
  border: 1px solid #000000;
  white-space: pre-line;
}
`;

PostForm.propTypes = {
  post: PROP_TYPE.POST.isRequired,
}