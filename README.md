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

Integration testing was carried out using Cypress, with the following user journeys used as the basis for the tests.
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

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
