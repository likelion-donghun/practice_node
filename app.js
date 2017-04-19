const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// res.send
app.get('/',(req, res)=>{
  res.send('welcome')
})

// res.sendFile
app.get('/main',(req, res)=>{
  console.log(req.body.email);
  res.sendFile(__dirname+'/public/main.html')
})

// res.render
app.post('/send_email',(req, res)=>{
  res.render('email', {email:req.body.email})
})

app.post('/ajax_send_email',(req, res)=>{
  const email = req.body.email
  console.log(email);
  var responseData = {'result':'ok', 'email':email}
  res.json(responseData);
})

app.get('',(req, res)=>{})
app.get('',(req, res)=>{})
app.get('',(req, res)=>{})


app.listen(3000, (req, res)=>{
  console.log('Server is running on 3000port');
})
