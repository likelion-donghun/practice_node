const express = require('express')
const app = express()
const router = express.Router()
const main = require('./main/main')
const email = require('./email/email')
const join = require('./join/index')
var login = require('./login/index')
var logout = require('./logout/index')

router.use('/main', main)

router.use('/email', email)

router.use('/join', join)

router.use('/login', login)

router.use('/logout', logout)

router.get('/',(req, res)=>{
  res.send('welcome')
})



module.exports = router
