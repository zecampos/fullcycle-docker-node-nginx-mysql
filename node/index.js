const express = require('express')

const app = express()

const getNames = require('./getNames')
const setName = require('./setName')
const port = process.env.APP_PORT || 3000


app.get('/', async (req, res) => {
 
  try{
    await setName()
    const person = await getNames()

// make a list of person.name
res.send(`
  <h1>Full Cycle Rocks!</h1>
  
  <ul>
    ${person.map(p => `<li>${p.name}</li>`).join('')}
  </ul>
  
`)
  }catch(err){
   res.send(` <h1>Full Cycle Rocks!</h1>
  <p>${err}</p>`)
  }


})

app.listen(port, () => {
  console.log('Up on:', port);
})