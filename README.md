# AI in a box 3ap

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In `dev` branch we'r holding react source, and `main` branch holds application `build` outcome. This build gets deployed to gh-pages, using `gh-pages` library, which creates new build and pushes to `main` branch. Once there are some changes to `main` branch, gh-pages automatically deploys new version, as well as `netlify`, where we'r hosting this app.

Available scripts:

`npm start`: starting the application
`npm deploy`: creating new build and pushing to `main` branch, which triggers new deployment

[![Netlify Status](https://api.netlify.com/api/v1/badges/b97e8bf0-99c9-4afd-aaa0-48bcc4e59573/deploy-status?branch=main)](https://app.netlify.com/sites/clever-dango-ce3363/deploys)
