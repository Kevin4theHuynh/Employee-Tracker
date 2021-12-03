const connect = require('./connect')

class db {constructor(connect){this.connect = connect}}

findEmployee() {
return this.connect.promise().query("SELECT employee.id, employee.first_name, employee.last_name, employee.role_id, employee.manager_id");
}


findRole()
{return this.index.promise().query(`SELECT role.id, role.title, role.salary, role.department_id`)}

findDepartment()
{return this.index.promise().query(`SELECT department.id, department.department_name`)}

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