const db = require('./db')
const logo = require('asciiart-logo')
require("console.table")
const {prompt} = require("inquirer")

let init = () => {
  const logo = logo({name: "employee tracker" })
  console.log(logo)
}

let questions = () => {
  prompt([
    {
      message: "What do you want to do?",
      type: "list",
      name: "options",
      choices: [
        {}
      ]
    }
  ])
}

function findEmployee() {
  db.findEmployee().then(([rows]) => {
    let employee = rows;
    console.table(employee)
  }).then(() => questions())
}

init()
