//Imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const { getDateDetails, addDate } = require('./controller')


//Middleware
app.use(express.json())
app.use(cors())

//Endpoints connecting HTML, CSS, and JS
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/indexCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/indexJS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/dgHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/dgCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/dgJS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/profHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/profCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/profJS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))

app.get('/date', getDateDetails)
app.post('/date', addDate)

const {SERVER_PORT} = process.env

app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))