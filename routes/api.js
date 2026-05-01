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

router.patch('/students/:id', function(req, res, next) {
    //matches request to students based on primary key
    const studentID = req.params.id
    const updatedStudent = req.body // updated data about this student
    console.log(updatedStudent)
    Student.update(updatedStudent, { where: {id: studentID} }).then( ( result ) => {
        // student id that doesn't exist
        const rowsModified = result[0]
        // if 1 row was changed we found the student and it was updated
        if (rowsModified ===1) {
            return res.send('OK')
        } else {
            // if no rows were updated, student was not found
            return res.status(404).send('Student not found')
        }
    }).catch(err => {
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


router.delete('/students/:id', function(req, res, next) {
    // delete request to remove rows where selected
    const studentID = req.params.id
    Student.destroy( { where: { id: studentID } } ).then( (rowsDeleted) => {
        if (rowsDeleted === 1){
            return res.send('Student deleted')
        } else { // Student with this id was not found, now rows destroyed
            return res.status(404).send('Student not found')
        }

        return res.send('Student deleted')
    }).catch( err => { // error handling
        return next(err)
    })
})


module.exports = router