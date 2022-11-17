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
        SELECT date_title, date_description FROM dates
        ORDER BY RANDOM()
        LIMIT 1
      `)
      .then((dbRes) => {
        res.status(200).send(dbRes[0])
      })
  }, 

  addDate: (req, res) => {
      let { date_title, date_description, email } = req.body

      sequelize.query(`
        INSERT INTO custom_dates (date_title, date_description, created_by)
        VALUES ('${date_title}', '${date_description}', '${email}');
        
        SELECT (date_title, date_description, created_by)
        FROM custom_dates
        WHERE created_by = ('${email}')
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
        console.log(dbRes[0])
      })
  },

  register: (req, res) => {

    const { register_email, register_password } = req.body

    sequelize.query(`
    INSERT INTO users (email, password)
    VALUES ('${register_email}', '${register_password}');
    `)
    .then(() => {
      console.log("Registration Successful")
      res.status(200).json({ message: 'Registration Successful' });
    })
    .catch(err => {
      console.log(err);
      res.status(401).json({ message: 'Registration Unsuccessful' });
    })
  },

  getUserDates: (req, res) => {

  let { date_title, date_description, email } = req.body

  sequelize.query(`
    SELECT *
    FROM custom_dates
    WHERE created_by = ('${email}')
    `)
    .then((dbRes) => {
      res.status(200).send(dbRes[0])
    })
  },

  deleteDateIdea: (req, res) => {
      const { id } = req.params

      sequelize.query(`
      DELETE FROM custom_dates WHERE date_id = ${id}
      `)
          .then((dbRes) => {
              console.log(dbRes)
              res.status(200).send(dbRes[0])
          })
          .catch((err) => {
              console.log(err)
              res.status(500).send('sequelize error')
          })
  },
}