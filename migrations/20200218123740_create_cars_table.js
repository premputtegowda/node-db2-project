
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.string('VIN',256).notNullable().index();
      tbl.string('make',128).notNullable();
      tbl.string('model', 128).notNullable();
      tbl.integer('mileage',50).notNullable();
      
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
};
