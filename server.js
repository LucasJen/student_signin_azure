const express = require('express')
const apiRoutes = require('./routes/api')

// create web application server
const app = express()

app.use(express.json())

app.use('/api', apiRoutes)

app.use(function(req, res, next) {
    res.status(404).send('Sorry, not found')
    // can't find matching route
})

app.use(function(req, res, next, err) {
    console.log(err.stack)
    res.status(500).send('Server error')
})

// start server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})