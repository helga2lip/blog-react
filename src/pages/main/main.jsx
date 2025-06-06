import { useMemo, useEffect, useState } from "react";
import { PostCard, Pagination, Search } from './components'
import { useServerRequest } from '../../hooks'
import { PAGINATION_LIMIT } from '../../constants'
import { debounce, getLastPageFromLinks } from './utils'
import styled from "styled-components";

const MainContainer = ({ className }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [shouldSearch, setShouldSearch] = useState(false);
  const [searchPhraase, setSearchPhrase] = useState('');
  const requestServer = useServerRequest();

  useEffect(() => {

    requestServer('fetchPosts', searchPhraase, page, PAGINATION_LIMIT).then(({ response: { posts, links } }) => {
      setPosts(posts);

      setLastPage(getLastPageFromLinks(links));
    });
  }, [requestServer, page, shouldSearch]);

  const startDelayedSearch = useMemo(() => debounce(setShouldSearch, 2000), []);

  const onSearch = ({ target }) => {
    setSearchPhrase(target.value);
    startDelayedSearch(!shouldSearch);
  };

  return (
    <div className={className}>
      <Search searchPhrase={searchPhraase} onChange={onSearch} />
      {posts.length
        ?
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
        :
        <div className="no-posts-found">Статьи не найдены</div>}
      {lastPage > 1 && <Pagination page={page} lastPage={lastPage} setPage={setPage} />}
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

& .no-posts-found {
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
}
`;