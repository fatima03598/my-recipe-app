# my-recipe-app
## SERVER
### Set-up
1. psql shell
2. CREATE DATABASE recipeapp
3. CREATE DATABASE recipeapptest
4. npm init
5. touch .gitignore
6. npm install --save express && npm install --save-dev nodemon
7. add node_modules/ in gitignore
8. npm install -g knex
9. npm install knex pg --save
10. npm install dotenv --save
11. touch .env
12. add test  and development url in env file and add the file on .gitignore 
13. knex init
14. add config in knex file
### app
1. knex migrate:make create-recipes-table
2. create table
3. knex migrate:latest && knex migrate:latest --env=test
4. knex seed:make recipeSeeds
5. knex seed:make recipeSeedsTest  --env test
6. populate files
7. knex seed:run && knex seed:run --env test
8. touch server.js
9. create a routes folder and inside create a recipesRoutes file
10. creates knex.js file in db folder 
11. create queries.js file in db


