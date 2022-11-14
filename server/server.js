require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const { getDateDetails, addDate } = require('./controller')

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, ''))
})
app.use(express.json())
app.use(cors())

app.get('/date', getDateDetails)
app.post('/date', addDate)

const {SERVER_PORT} = process.env

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))