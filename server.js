const express = require('express'); 
var app = express() ;
const userroute = require('./Routes/userroute');
const bodyParser = require('body-parser'); 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use('/api/user', userroute); 

app.get('/api/homePage', (req , res)=>{
    res.send("this is the backend Homepage"); 
});






var port = 4000|| process.env.port ;
console.log("async"); 
console.log('listening on ' + port); 

app.listen(40230); 