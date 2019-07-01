import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-jack-wilson.herokuapp.com/api"
});

//always remember to return your axio srequest

export const getArticles = (topic, sort_by, author, order, page) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort_by,
        author: author,
        order: order,
        p: page
      }
    })
    .then(({ data }) => {
      return data;
    });
};

export const getTopics = () => {
  return request.get(`/topics`).then(({ data }) => {
    return data.topics;
  });
};

export const getArticle = article_id => {
  return request.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

export const getCommentsByArticle = article_id => {
  return request
    .get(`/articles/${article_id}/comments`, {
      params: {}
    })
    .then(({ data }) => {
      console.log(data);
      return data.comments;
    });
};

export const postComment = (article_id, username, postComment) => {
  return request.post(`/articles/${article_id}/comments`, {
    username: username,
    body: postComment
  });
};

export const deleteComment = comment_id => {
  return request.delete(`/comments/${comment_id}`);
};

export const patchVotes = (id, increment, type) => {
  return request
    .patch(`/${type}s/${id}`, { inc_votes: increment })
    .then(({ data }) => {
      return data[type];
    });
};
