const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

// res.sendFile
router.get('/',(req, res)=>{
  // console.log(req.body.email);
  console.log('main is loaded', req.user)
  var id = req.user
  // res.sendFile(path.join(__dirname, '../../public/main.html'))
  res.render('main.ejs', {'id':id})
})


module.exports = router
