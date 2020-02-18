
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      const cars = [
        { VIN:"124343432", 
          make:"Toyota",
          model:"Corolla",
          mileage:120000,
          clean:true,
          salvage:false
        },
        { VIN:"1243JQ3432", 
          make:"Honda",
          model:"Civic",
          mileage:100000,
          clean:true,
          salvage:true
        }
      ]
      return knex('cars').insert(cars);
    });
};
