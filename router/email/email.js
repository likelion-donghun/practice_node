const express = require('express')
const app = express()
const router = express.Router()

// res.render
router.post('/send',(req, res)=>{
  res.render('email', {email:req.body.email})
})

router.post('/ajax',(req, res)=>{
  const email = req.body.email
  console.log(email);
  var responseData = {'result':'ok', 'email':email}
  res.json(responseData);
})

module.exports = router
