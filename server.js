const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


app.listen(9999, ()=>{
  console.log('Server is running with port 9999');
})