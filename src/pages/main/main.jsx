import { useEffect, useState } from "react";
import { PostCard, Pagination } from './components'
import { useServerRequest } from '../../hooks'
import { PAGINATION_LIMIT } from '../../constants'
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const requestServer = useServerRequest();

  useEffect(() => {

    requestServer('fetchPosts', page, PAGINATION_LIMIT).then((posts) => {
      setPosts(posts.response);
    });
  }, [requestServer, page]);

  return (
    <div className={className}>
      <div className="post-list">
        {posts.map(({ id, title, imageUrl, publishedAt, commentsCount }) => <PostCard
          key={id}
          id={id}
          title={title}
          imageUrl={imageUrl}
          publishedAt={publishedAt}
          commentsCount={commentsCount}
        />)}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
};

export const Main = styled(MainContainer)`

& .post-list {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
`;