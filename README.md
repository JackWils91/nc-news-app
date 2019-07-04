# NC News App - Jack Wilson

NC News is a Reddit style news aggregation application. There are two user levels;

- Anonymous users who are able to view comments and articles.
- Signed in users who are able to add their own comment, vote on articles and comments and delete their own articles and comments.

---

## Hosted

Front-End:

- [Netlify - NC News](https://nc-news-jack-wilson.netlify.com)
- [Git repository](https://github.com/JackWils91/nc-news-app)

Back-end:

- [Heroku - NC News](https://nc-news-jack-wilson.herokuapp.com/)
- [Git repository](https://github.com/JackWils91/nc-news)

---

## Installation

Prerequisites:

- npm version 6
- node version 10

Steps:

1. Clone this repository

```bash
git clone https://github.com/JackWils91/nc-news-app
```

2. cd into repository

```bash
cd nc-news-app
```

3. Install dependencies

```bash
npm install
```

4. Run the "start" script to start the application running locally

```bash
npm start
```

6. To stop running the server use ctrl + c

## User Journeys

**As a user, I should be able to...**

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

**As a hiring partner, I should be able to...**

10. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
11. follow the readme instructions to easily run the project locally.
12. find a link to the hosted version of the project in the readme.
13. find a link to the back-end repository of the project in the readme.
14. find a link to the hosted version of the back-end project in the readme.

**Error-handling: As a user, I should...**

15. show a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
16. show a 400 error if I go on a invalid article ID.
17. not be allowed to post a comment if I have not filled in all of the form boxes.

### Additional user stories,

**As a user, I should be able to...**

18. navigate over pages of articles (e.g. using pagination or infinite scroll)

## Built with

- React.js
- Axios.js

## Author

Jack Wilson
