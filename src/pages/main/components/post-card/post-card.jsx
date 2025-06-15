import styled from "styled-components";
import { Link } from 'react-router-dom'
import PropTypes from "prop-types";
import { Icon } from "../../../../components";

const PostCardContainer = ({ className, id, title, imageUrl, publishedAt, commentsCount }) => {
  return (
    <div className={className}>
      <Link to={`/post/${id}`}>
        <img src={imageUrl} alt={title} />
        <div className="post-card-footer">
          <h4>{title}</h4>
          <div className="post-card-info">
            <div className="published-at">
              <Icon
                id="fa-calendar-o"
                inactive={true}
                margin="0 10px 0 0"
              />
              {publishedAt}
            </div>
            <div className="comments-count">
              <Icon
                id="fa-comment-o"
                inactive={true}
                margin="0 10px 0 0"
              />
              {commentsCount}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export const PostCard = styled(PostCardContainer)`
width: 31.9%;
display: flex;
flex-direction: column;
border: 1px solid #000000;

& img {
  display: block;
  width: 100%;
}

& .post-card-footer {
  display: flex;
  flex-direction: column;
  border-top: 1px solid #000;
  min-height: 95px;
}

& h4 {
  margin: 0;
  padding: 5px;
}

& .post-card-info {
  margin-top: auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

& .published-at {
  display: flex;
}

& .comments-count {
  display: flex;
}
`;

PostCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  commentsCount: PropTypes.number.isRequired,
}