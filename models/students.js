module.exports = (sequelize, DataTypes) => {
    // define model (models define databases)
    const Student = sequelize.define('Student', {
        // define columns in db
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: false
            }
            // TODO future = Check for aa1234aa format
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: false
        }
    })

    // create or update a table
    Student.sync( {force: false} ).then( () => {
        console.log('Synced student table')
    })

    return Student
}