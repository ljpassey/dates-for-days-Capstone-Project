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
      let { date_title, date_description } = req.body

      sequelize.query(`
        INSERT INTO custom_dates (date_title, date_description)
        VALUES ('${date_title}', '${date_description}');
        
        SELECT date_title, date_description FROM custom_dates
      `)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
      .catch(err => console.log(err)) 
  },
  runLogin: (req, res) => {
    
      const { login_email, login_password } = req.body

      sequelize.query(`
      SELECT * 
      FROM users
      WHERE email = ('${login_email}') AND password = ('${login_password}')
      `)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
      .catch(err => console.log(err))
  }
}