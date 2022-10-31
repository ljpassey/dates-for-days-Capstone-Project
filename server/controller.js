require('dotenv').config()

const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: 'postgres',
  dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
})

const { CONNECTION_STRING } = process.env

module.exports = {
    getDateDetails: (req,res) => {
      sequelize.query(`
        SELECT date_title, date_description, created_by FROM dates
        ORDER BY RANDOM()
        LIMIT 1
      `)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
    }, 
    addDate: (req, res) => {
      
    }
}