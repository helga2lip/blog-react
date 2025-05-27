import { Comments, PostContent } from './components'
import { useParams } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from '../../hooks'
import { selectPost } from '../../selectors'
import styled from "styled-components";
import { loadPostAsync } from '../../actions';

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const params = useParams();
  const requestServer = useServerRequest();

  useEffect(() => {
    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, requestServer, params.id]);

  return (
    <div className={className}>
      <PostContent post={post} />
      <Comments comments={post.comments} />
    </div>


  );
};

export const Post = styled(PostContainer)`
margin: 40px 0;
padding: 0 80px;
`;