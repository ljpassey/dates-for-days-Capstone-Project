//Imports
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

const { getDateDetails, addDate, runLogin, register, getUserDates } = require('./controller')

//Middleware
app.use(express.json())
app.use(cors())

//Endpoints connecting HTML, CSS, and JS
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/login.html')))
app.get('/loginJS', (req, res) => res.sendFile(path.join(__dirname, '../client/login.js')))
app.get('/loginCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/login.css')))
app.get('/indexHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/index.html')))
app.get('/indexCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.css')))
app.get('/indexJS', (req, res) => res.sendFile(path.join(__dirname, '../client/index.js')))
app.get('/dgHTML', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.html')))
app.get('/dgCSS', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.css')))
app.get('/dgJS', (req, res) => res.sendFile(path.join(__dirname, '../client/date_generator.js')))

//Endpoints connecting background images
app.get('/indexJPG', (req, res) => res.sendFile(path.join(__dirname, '../client/images/index.jpg')))
app.get('/dgJPG', (req, res) => res.sendFile(path.join(__dirname, '../client/images/dg.jpg')))
app.get('/profJPG', (req, res) => res.sendFile(path.join(__dirname, '../client/images/prof.jpg')))
app.get('/loginJPG', (req, res) => res.sendFile(path.join(__dirname, '../client/images/login.jpg')))

//Endpoints connecting controller functions and axios methods
app.get('/date', getDateDetails)
app.post('/date', addDate)
app.post('/login', runLogin)
app.post('/register', register)
app.post('/userCreatedDates', getUserDates)

const {PORT} = process.env || 4004

app.listen(PORT, () => console.log(`up on ${PORT}`))