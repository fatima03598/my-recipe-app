# My recipe app

## Description
Simple Recipe App website where a user can add a recipe by filling out a form and also browse through all recipes that were previously added

![Recipe app](./Recipe.gif)

## Requirements

* Postgres account


## Getting Started
### Backend 
1. open psql shell

CREATE DATABASE recipeapp 

CREATE DATABASE recipeapptest

2. Create .env file in my-recipe.app folder 
```
DEVELOPMENT_URL=postgres://[your username]:[your password]@[port]/recipeapp
TEST_URL=postgres://[your username]:[your password]@[port]/recipeapptest
```

3. On the terminal open the root folder
```
npm install
```
4. 
```
npm start
```
### Frontend 
1. In another terminal open the react-recipe-app folder, run..: 
```
npm install
```
2. 
```
npm start
```
## User Stories 
* As a user, I can add my recipe with a title, serving, time taken, description and image I uploaded.
* As a user, I can add my recipe with a title, serving, time taken, description and image with an url.
* As a user I can browse through all the recipes.
* As a user I can search for a particular recipe. 

## Main Technologies
* React js
* Node.js
* Express.js
* Knex.js with pg 
* Mocha & Chai





