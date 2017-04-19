const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

// res.sendFile
router.get('/',(req, res)=>{
  console.log(req.body.email);
  res.sendFile(path.join(__dirname, '../../public/main.html'))
})


module.exports = router
