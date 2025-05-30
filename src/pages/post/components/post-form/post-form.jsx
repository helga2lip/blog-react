import { Icon, Input } from '../../../../components'
import { useRef } from 'react'
import { SpecialPanel } from '../special-panel/special-panel'
import { sanitizeContent } from './utils'
import styled from "styled-components";

const PostFormContainer = ({ className, post: { title, imageUrl, content, publishedAt } }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  const onSave = () => {
    const newImageUrl = imageRef.current.value;
    const newTitleUrl = titleRef.current.value;
    const newContentUrl = sanitizeContent(contentRef.current.innerHTML);

    console.log(newImageUrl)
    console.log(newTitleUrl)
    console.log(newContentUrl)
  }

  return (<div className={className}>
    <Input defaultValue={imageUrl} placeholder="Изображение..." ref={imageRef} />
    <Input defaultValue={title} placeholder="Заголовок..." ref={titleRef} />
    <SpecialPanel
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