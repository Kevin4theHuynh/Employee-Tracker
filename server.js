const db = require('./db')
const logo = require('asciiart-logo')
require("console.table")
const {prompt} = require("inquirer")

let init = () => {
  const logo = logo({name: "Employee Tracker" })
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

        }
      ]
    }
  ]).then(res => {
    let choice = res.choice;
    switch (choice) {
      case 'FIND_EMPLOYEE':
        findEmployee();
        break;

        default:
          quit();
    }
  }
  )
}

function findEmployee() {
  db.findEmployee().then(([rows]) => {
    let employee = rows;
    console.table(employee)
  }).then(() => questions())
}

init()
