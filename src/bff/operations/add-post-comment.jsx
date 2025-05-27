import { addComment, getPost } from '../api'
import { getComments } from '../api/get-comments';
import { ROLE } from '../constants'
import { sessions } from '../sessions';

export const addPostComment = async (userSession, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(userSession, accessRoles)) {
    return {
      error: "Доступ запрещен",
      response: null,
    }
  }

  await addComment(userId, postId, content);

  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    error: null,
    response: {
      ...post,
      comments,
    },
  }
}