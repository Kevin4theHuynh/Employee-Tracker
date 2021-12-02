const mysql = require('mysql2')
const dotenv = require('dotenv')
const connect = require('./dbinfo')
const Connection = require('mysql2/typings/mysql/lib/Connection')


const db = mysql.createConnection(
    {
      host: connect.db_host,
      user: connect.db_user,
      password: connect.db_pass,
      port: connect.db.port,
      database: 'employee_db'
    },
    console.log(`Connected`)
  )
db.connect(function (error) {
    if (error) throw error
})

module.exports = db