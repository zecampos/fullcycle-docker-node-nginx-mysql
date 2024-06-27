const connection = require('./connection')

const getNames = async () => {
    const [ rows ] = await connection.query('SELECT name FROM person;')
    return rows
}

module.exports = getNames