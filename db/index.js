const index = require('./connect')

class db {constructor(index){this.index= index}}

findEmployee() 
{return this.index.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id`)}





db.query('SELECT * FROM department', function (err, results) {
    console.log(results)
  })
  
db.query('SELECT * FROM role', function (err, results) {
    console.log(results)
  })
  
db.query('SELECT * FROM employee', function (err, results) {
    console.log(results)
  })

  module.exports = new db(index)