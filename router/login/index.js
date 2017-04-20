const express = require('express')
const app = express()
const router = express.Router()
var mysql = require('mysql')
const path = require('path')
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var connection = mysql.createConnection({
  host : 'localhost',
  port : 3306,
  user : 'root',
  password : 'apmsetup',
  database : 'class'
})

connection.connect()

router.get('/',(req, res)=>{
  var msg;
  var errMsg = req.flash('error')
  if(errMsg) msg = errMsg;
  console.log('GET login url')
  //res.sendFile(path.join(__dirname, '../../public/join.html'))
  res.render('login.ejs', {'message':msg})
})

passport.serializeUser(function(user, done) {
  console.log('passport session save: ', user.id)
  done(null, user.id);
});

passport.deserializeUser(function(id, done){
   console.log('passport session get id: ', id)
   done(null, id)
})

passport.use('local-login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback : true
}, function(req, email, password, done){
  // console.log('local-join callback called');
  console.log(1)
  var query = connection.query('select * from user where email=?', [email], function(err, rows){
      if(err) return done(err);
      if(rows.length){
        return done(null, {'email': email, 'id': rows[0].UID })
      }else{
          return done(null, false, {'message': 'your login info is not found>.<' })
        }
      })
    }
))


// router.post('/',passport.authenticate('local-join',{
//           successRedirect: '/main',
//           failureRedirect: '/join',
//           failureFlash: true
// }))

// router.post('/', (req, res)=>{
//     var body = req.body
//     var email = body.email
//     var name = body.name;
//     var passwd = body.password;
//     console.log(email);
//     // connection.query('insert into user (email, name, pw) values ("'+email+'", "'+ name +'","'+passwd+'")'
//     var sql = {email: email, name: name, pw: passwd}
//     var query = connection.query('insert into user set ?', sql, function(err, rows){
//       if(err) throw err
//       else
//       console.log("ok db insert : ", rows.insertId, rows.name);
//       res.render('welcome.ejs', {'email': email , 'id': rows.insertId})
//     })
//   })

// route for ajax
router.post('/', function(req, res, next) {
  passport.authenticate('local-login', function(err, user, info) {
    if (err) res.status(500).json(err);
    if (!user) return res.status(401).json(info.message);
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.json(user);
    });
  })(req, res, next);
});





module.exports = router
