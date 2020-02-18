
exports.up = function(knex) {
    return knex.schema.table('cars', tbl => {
        tbl.boolean('clean');
        tbl.boolean('salvage');
    })
    
};

exports.down = function(knex) {
  return knex.schema.table('cars', tbl => {
      tbl.dropColumn('clean');
      tbl.dropColumn('salvage');
  })
};
