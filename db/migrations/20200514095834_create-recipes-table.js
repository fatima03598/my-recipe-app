
exports.up = (knex, Promise) => {
  return knex.schema.createTable('recipes', (table) => {
      table.increments();
      table.string('title').notNullable();
      table.text('ingridients').notNullable();
      table.string('difficulty').notNullable();
      table.integer('minutes').notNullable();
      table.integer('serving').notNullable();
      table.string('imageURL').notNullable();
      table.text('method', longtext).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('recipes');
};
