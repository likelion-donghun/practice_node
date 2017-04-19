const express = require('express')
const app = express()
const router = express.Router()
var mysql = require('mysql')
const path = require('path')


var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'apmsetup',
  database : 'class'
})

connection.connect()

router.get('/',(req, res)=>{
  console.log('GET Join url')
  res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', (req, res)=>{
    var body = req.body
    var email = body.email
    var name = body.name;
    var passwd = body.password;
    console.log(email);
    var query = connection.query('insert into user (email, name, pw) values ("'+email+'", "'+ name +'","'+passwd+'")', function(err, rows){
      if(err){throw err}
      console.log("ok db insert");
    })
  })

module.exports = router
