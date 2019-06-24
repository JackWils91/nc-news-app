import axios from "axios";

const request = axios.create({
  baseURL: "https://nc-news-jack-wilson.herokuapp.com/api"
});

//always remember to return your axio srequest

export const getArticles = (topic, author) => {
  return request
    .get("/articles", {
      params: {
        topic: topic,
        author: author
      }
    })
    .then(({ data }) => {
      return data.articles;
    });
};
