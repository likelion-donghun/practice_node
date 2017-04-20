const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const index = require('./router/index')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var session = require('express-session')
var flash = require('connect-flash')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

app.use('/', index)

app.get('',(req, res)=>{})
app.get('',(req, res)=>{})
app.get('',(req, res)=>{})


app.listen(3000, (req, res)=>{
  console.log('Server is running on 3000port');
})
