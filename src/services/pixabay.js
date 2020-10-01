import axios from "axios";

const fetchArticlesByQuery = (searchQuery, page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?key=17934686-6855a8a3291e2952d0451e641&per_page=12&q=${searchQuery}&page=${page}`
    )
    .then((response) => response.data.hits);
};

export default {
  fetchArticlesByQuery,
};
