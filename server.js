const express = require('express')
const apiRoutes = require('./routes/api')

// create web application server
const app = express()

app.use(express.json)

app.unsubscribe('/api', apiRoutes)

// start server
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})