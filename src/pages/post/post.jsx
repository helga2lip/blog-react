import { Comments, PostContent, PostForm } from './components'
import { useMatch, useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from '../../hooks'
import { selectPost } from '../../selectors'
import styled from "styled-components";
import { loadPostAsync, RESET_POST_DATA } from '../../actions';

const PostContainer = ({ className }) => {
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');
  const params = useParams();
  const requestServer = useServerRequest();

  useLayoutEffect(() => {

    dispatch(RESET_POST_DATA);
  }, [dispatch]);

  useEffect(() => {

    if (isCreating) {
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id));
  }, [dispatch, requestServer, params.id, isCreating]);

  return (
    <div className={className}>
      {isCreating || isEditing ? (
        <PostForm post={post} />
      ) : (
        <>
          <PostContent post={post} />
          <Comments comments={post.comments} postId={post.id} />
        </>
      )}
    </div>


  );
};

export const Post = styled(PostContainer)`
margin: 40px 0;
padding: 0 80px;
`;