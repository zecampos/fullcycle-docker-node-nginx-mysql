const connection = require('./connection')
const faker = require('faker')
const setName = async () => {
    const name = faker.name.findName()
    const [ rows ] = await connection.query('INSERT INTO person (name) VALUES (?)', [name])
    return rows
}
   


module.exports = setName