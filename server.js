const express = require('express')
const db = require('inquirer')

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


db.query('SELECT * FROM department', function (err, results) {
  console.log(results)
})

db.query('SELECT * FROM role', function (err, results) {
  console.log(results)
})

db.query('SELECT * FROM employee', function (err, results) {
  console.log(results)
})

app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });