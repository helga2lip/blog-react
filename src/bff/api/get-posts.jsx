import { transformPost } from '../transformers'

export const getPosts = (page, limit) =>
  fetch(`http://localhost:3005/posts?_page=${page}&_per_page=${limit}`)
    .then((response) => response.json())
    .then((response) => response && response.data && response.data.map(transformPost));