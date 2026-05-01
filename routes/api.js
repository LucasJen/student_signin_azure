const express = require('express')
const database = require('../models') // will require the index.js file from this directory
const Student = database.Student //student model

const router = express.Router()

router.get('/students', function(req, res, next) {
    // queries db, gets all rows, converts to JSON, available in the then function
    Student.findAll().then(student => {
        return res.json(students)
    })
})

module.exports = router