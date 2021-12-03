const mysql = require('mysql2')

const connect = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_db'
    },
    console.log(`Connected`)
  )
connect.connect(function (error) {
    if (error) throw error
})

module.exports = connect;