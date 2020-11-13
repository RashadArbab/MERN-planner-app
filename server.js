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






const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : (process.env.PORT || 4000);
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});