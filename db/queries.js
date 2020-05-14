const knex = require('./knex.js');


Recipes = () => {
    return knex('recipes')
}

getAll = () => {
    return Recipes().select();
}
 
getSingle = (recipeID) => {
    return Recipes().where('id', parseInt(recipeID)).first();
}

add = (recipe) => {
    return Recipes().insert(recipe, 'id');
}

update = (recipeID, updated) => {
    return Recipes().where('id', parseInt(recipeID)).update(updated);
}

deleteItem = (recipeID) => {
    return Recipes().where('id', parseInt(recipeID)).del();
}

module.exports = {
    getAll: getAll,
    getSingle: getSingle,
    add: add,
    update: update,
    deleteItem: deleteItem
  };