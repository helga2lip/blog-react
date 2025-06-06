import { transformPost } from '../transformers'

export const getPost = async (postId) =>
  fetch(`http://localhost:3005/posts/${postId}`)
    .then((response) => {
      if (response.ok) {
        return response;
      }

      const error = response.status === 404
        ? 'Такая страница не существует'
        : 'Что-то пошло не так. Попробуйте еще раз позднее'

      return Promise.reject(error);

    })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transformPost(loadedPost));
