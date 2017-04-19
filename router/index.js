const express = require('express')
const app = express()
const router = express.Router()
const main = require('./main/main')
const email = require('./email/email')

router.use('/main', main)

router.use('/email', email)

// res.send
router.get('/',(req, res)=>{
  res.send('welcome')
})



module.exports = router