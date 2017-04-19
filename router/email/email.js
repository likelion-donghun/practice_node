const express = require('express')
const app = express()
const router = express.Router()
var mysql = require('mysql')

var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'apmsetup',
  database : 'class'
})

connection.connect()

// res.render
router.post('/send',(req, res)=>{
  res.render('email', {email:req.body.email})
})

router.post('/ajax',(req, res)=>{
  const email = req.body.email
  console.log(email);
  //var responseData = {'result':'ok', 'email':email}
  var responseData = {};

  var query = connection.query('select name from user where email="'+ email+ '"', function(err, rows){
    if(err) throw err;
    if(rows[0]){
      responseData.result = 'ok'
      responseData.name = rows[0].name
      console.log('name : '+ rows[0].name)
    }else{
      console.log('none : '+ rows[0])
      responseData.result = 'none'
      responseData.name = ""
    }
    res.json(responseData);
  })
})

module.exports = router
