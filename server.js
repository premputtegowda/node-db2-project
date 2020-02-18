const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

 server.get('/api/cars', (req,res) => {
     db('cars')
        .then(cars => {
            
            res.status(200).json(cars)
        })
        .catch(err => res.status(500).json({error: "sorry something went wrong"}))
 })

 server.get('/api/cars/:id', (req,res) => {
    db('cars').where({id: req.params.id})
       .then(cars => {
        
           res.status(200).json(cars)
       })
       .catch(err => res.status(500).json({error: "sorry something went wrong"}))
})

server.get('/api/cars/:id', (req,res) => {
    db('cars').insert
       .then(cars => {
        
           res.status(200).json(cars)
       })
       .catch(err => res.status(500).json({error: "sorry something went wrong"}))
})

server.post('/api/cars', (req,res) => {
    db('cars').insert(req.body, "id")
       .then(ids => {
        
           res.status(201).json(ids)
       })
       .catch(err => res.status(500).json({error: "sorry something went wrong"}))
})
server.put('/api/cars/:id', (req,res) => {
    db('cars').where({id: req.params.id}).update(req.body)
       .then(count => {
        
           res.status(201).json(count)
       })
       .catch(err => res.status(500).json({error: "sorry something went wrong"}))
})  

server.delete('/api/cars/:id', (req,res) => {

    
    db('cars').where({id: req.params.id}).del()
        .then(count => res.status(200).json(count))
        .catch(err =>res.status(500).json({error: 'Sorry something went wrong'}))
})

module.exports = server;