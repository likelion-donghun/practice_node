const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

//
router.get('/',(req, res)=>{
  // console.log(req.body.email);
  console.log('main is loaded', req.user)
  var id = req.user
  if(!id) res.render('login.ejs') //login 안된 상태에서 main화면 접근 못함
  // res.sendFile(path.join(__dirname, '../../public/main.html'))
  res.render('main.ejs', {'id':id})
})


module.exports = router
