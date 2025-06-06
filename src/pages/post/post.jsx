import { Comments, PostContent, PostForm } from './components'
import { useMatch, useParams } from 'react-router-dom'
import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useServerRequest } from '../../hooks'
import { selectPost } from '../../selectors'
import { Error } from '../../components'
import styled from "styled-components";
import { loadPostAsync, RESET_POST_DATA } from '../../actions';

const PostContainer = ({ className }) => {
  const [error, setError] = useState(true);
  const post = useSelector(selectPost);
  const dispatch = useDispatch();
  const isEditing = useMatch('/post/:id/edit');
  const isCreating = useMatch('/post');
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const requestServer = useServerRequest();

  useLayoutEffect(() => {

    dispatch(RESET_POST_DATA);
  }, [dispatch, isCreating]);

  useEffect(() => {

    if (isCreating) {
      setIsLoading(false);
      return;
    }

    dispatch(loadPostAsync(requestServer, params.id)).then((postData) => {
      setError(postData.error);
      setIsLoading(false)
    }
    );
  }, [dispatch, requestServer, params.id, isCreating]);

  if (isLoading) {
    return null;
  }

  return (
    error
      ? <Error error={error} />
      :
      (<div className={className} >
        {isCreating || isEditing ? (
          <PostForm post={post} />
        ) : (
          <>
            <PostContent post={post} />
            <Comments comments={post.comments} postId={post.id} />
          </>
        )
        }
      </div >)


  );
};

export const Post = styled(PostContainer)`
margin: 40px 0;
padding: 0 80px;
`;