require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env

const { getDateDetails, } = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/date', getDateDetails)


app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))