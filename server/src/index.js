const express = require('express')
const app = express()
const cors = require('cors')
const connect=require('./db/connect')
const userRoute=require('./routes/user')

app.use(cors())
app.use(express.json())


connect() //Connecting to Database

require('dotenv').config() //This should always above the port.
const port = process.env.PORT

app.use(userRoute)

app.listen(port, () => {
    console.log('Server is running on localhost:',process.env.PORT)
})