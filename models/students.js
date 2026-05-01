module.exports = (sequelize, DataTypes) => {
    // define model (models define databases)
    const Student = sequelize.define('Student', {
        // define columns in db
        name: {
            type: DataTypes.STRING
        },
        starID: {
            type: DataTypes.STRING
        },
        present: {
            type: DataTypes.BOOLEAN
        }
    })

    // create or update a table
    Student.sync( {force: true} ).then( () => {
        console.log('Synced student table')
    })

    return Student
}