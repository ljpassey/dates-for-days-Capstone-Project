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
app.get('/indexCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.css')))
app.get('/indexJS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.js')))
app.get('/dgHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.html')))
app.get('/dgCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.css')))
app.get('/dgJS', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.js')))
app.get('/profHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/profile.html')))
app.get('/profCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/profile.css')))
app.get('/profJS', (req, res) => res.sendFile(path.join(__dirname, '../client/profile.js')))

app.get('/date', getDateDetails)
app.post('/date', addDate)

const {PORT} = process.env || 4004

app.listen(PORT, () => console.log(`up on ${PORT}`))