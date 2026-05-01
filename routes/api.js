const express = require('express')
const database = require('../models') // will require the index.js file from this directory
const Student = database.Student //student model

const router = express.Router()

router.get('/students', function(req, res, next) {
    // queries db, gets all rows, converts to JSON, available in the then function
    Student.findAll( { order: ['name'] } ).then(student => {
        return res.json(student)
    })
})

router.post('/students', function(req, res, next) {
    const newStudent = req.body
    console.log(newStudent)
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!')
    }).catch( err => {
        // 400 is bad request
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message)
            return res.status(400).json(messages)
        } else {
            // some other error?
            next(err)
        }
    })
})


module.exports = router