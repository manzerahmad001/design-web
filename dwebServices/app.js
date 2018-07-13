const express = require('express')
const bodyParser = require('body-parser')
const UsersService  = require('./services/UsersService')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true}))

app.post('/api/addUser', function (req, res) {
  let addUserObj = new UsersService(req, res)
  addUserObj.addUsers()
})
app.post('/api/getUser', function (req, res) {
  let getUserObj = new UsersService(req, res)
  getUserObj.getUser()
})


app.listen(3000, function () {
  console.log('Grocery Web app service listening on port 3000!')
})