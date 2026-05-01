const { Sequelize, DataTypes } = require('sequelize')
const configJson = require('../config.json')
const createStudentModel = require('./students.js')

// looks for and reads the value of an environment value called NODE_ENV
// env variables are set for a user or the entire system
// and application running can read the variable
// At azure, we'll create an environment variable called "NODE_ENV" and set it to production
// if not found, it will set the value to "development", using the development settings

const env = process.env.NODE_ENV || "development"

const config = configJson[env] // read the configuration object for "development" or "production"

const sequelize = new Sequelize(config)

const database = {
    sequelize: sequelize,
    Sequelize: Sequelize
}

const studentModel = createStudentModel(sequelize, DataTypes)
const studentModelName = studentModel.name // 'student'
database[studentModelName] = studentModel

module.exports = database