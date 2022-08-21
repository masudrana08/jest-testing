const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/users', (req, res)=>{
  res.send({status:'ok'})
})


app.listen(9999, ()=>console.log(9999 + ' is running'))
module.exports = app