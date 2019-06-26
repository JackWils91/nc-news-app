import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-jack-wilson.herokuapp.com/api"
});

//always remember to return your axio srequest

export const getArticles = (topic, sort_by) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        sort_by: sort_by
      }
    })
    .then(({ data }) => {
      return data.articles;
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
