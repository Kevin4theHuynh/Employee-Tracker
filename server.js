const db = require('./db')
const logo = require('asciiart-logo')
require("console.table")
const {prompt} = require("inquirer")

let init = () => {
  const logo = logo({name: "Employee Tracker" }).render()
  console.log(logo)

  questions();
}

let questions = () => {
  prompt([
    {
      message: "What do you want to do?",
      type: "list",
      name: "options",
      choices: [
        {
          name: 'Find All Employees',
          value: 'FIND_EMPLOYEE'
        },
        {
          name: "Add Employee",
          value: "ADD_EMP",
        },
        {
          name: "Update Employee Role",
          value: "UPDATE_EMPOLYEE_ROLE"
        },
        {
          name: "View All Roles",
          value: "VIEW_ROLES"
        },
        {
          name: "Add Role",
          value: "ADD_ROLE"
        },
        {
          name: "Add Department",
          value: "ADD_DEPARTMENT"
        },
        {
          name: "Remove Employee",
          value: "REMOVE_EMPLOYEE"
        },
        {
          name: "Quit",
          value: "QUIT"
        }
      ]
    }
  ]).then(answers => {
    let choice = answers.optionChoice;
    switch(choice) {
      case "FIND_EMPLOYEE":
        return findEmployee();
        break;
      case "ADD_EMP":
        return addEmployee()
        break;
      case "UPDATE_EMPLOYEE_ROLE":
        return updateEmployeeRole()
        break;
      case "VIEW_ROLES":
        return viewRoles()
        break;
      case "ADD_ROLE":
        return addRoles()
        break;
      case "ADD_DEPARTMENT":
        return addDepartment()
        break;
      case "REMOVE_EMPLOYEE":
        return removeEmpolyee()
        break;
        default: quit()
    }
  })
}

function findEmployee() {
  db.findEmployee()
  .then(([row]) => {
    let empolyee = row

  })
  .then(() => questions())
}

function addEmployee() {
  db.findEmployee()
  .then(([row]) => {
    let employee = row
    const employeeChoice = employee.map(({
      id, first_name, last_name
    }) => 
    ({name: `${first_name} ${last_name}`, value: id}))
    prompt([
      {
        type: 'list',
        name: 'employeeID',
        message: 'Whos role would you like to update',
        choices: employeeChoice
      }
    ])

  }