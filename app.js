const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./router/index')
var mysql = require('mysql')

var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'apmsetup',
  database : 'class'
})

connection.connect()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.use('/', index)



app.get('',(req, res)=>{})
app.get('',(req, res)=>{})
app.get('',(req, res)=>{})


app.listen(3000, (req, res)=>{
  console.log('Server is running on 3000port');
})
