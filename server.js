const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

 server.get('/api/cars', (req,res) => {
     db('cars')
        .then(cars => {
            console.log(cars)
            res.status(200).json(cars)
        })
        .catch(err => res.status(500).json({error: "sorry something went wrong"}))
 })

 server.get('/api/cars/:id', (req,res) => {
    db('cars').where({id: req.params.id})
       .then(cars => {
           console.log(cars)
           res.status(200).json(cars)
       })
       .catch(err => res.status(500).json({error: "sorry something went wrong"}))
})


module.exports = server;