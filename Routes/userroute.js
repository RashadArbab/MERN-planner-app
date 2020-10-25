

const e = require('express');
const express = require('express');
var app = express(); 
const router = express.Router(); 
const mongoose = require('mongoose');

var userModel = mongoose.model('users' , {name : String , userName : String, pass: String , notes : [String]}); 
var useName ; 
mongoose.connect('mongodb://localhost:27017/MernNotes' ,{useNewUrlParser: true , useUnifiedTopology :true , useFindAndModify : false} ,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('MongoDB connection successful'); 
    }
}) ;


router.post('/register' , (req, res)=>{
    
    

    var name = req.body.name; 
    var userName = req.body.userName; 
    var pass = req.body.pass; 
    var notes = req.body.notes; 

    console.log("registerd note: " + notes); 

    var newUser = new userModel({name, userName , pass , notes}) ; 

    newUser.save((err)=>{
        if(err){
            res.send('error saving user');
        }
        else{
            res.send('user registration successful'); 
        }
    })


}) ;

router.post('/notes' , (req, res)=>{
    userModel.find({userName:useName} ,  (err , documents)=>{
        if(err){
            res.send(err); 
        }else{
            res.send(documents); 
        }
    })
})

router.post('/notes/add' , (req, res)=>{

    var note = req.body.notes; 

    console.log("received note: " + req.body.notes); 

    userModel.find({userName:useName} , (err) =>{
        if(err){
            res.send(err); 
        }
        else{
            //res.send("we are here" + req.body.note); 
            console.log(useName + " " + note);
            
            userModel.updateOne({
                
                userName : useName 
                
            }, {
                //add to set makes sure that so long as note does not already exist it will add it to the array
                $addToSet : {notes : note}
            }, (err)=>{
                if(err){
                    res.send('Adding note failed')
                }
                else{
                    res.send('adding note success maybe ' + note)
                }
            })

        }
        
              
    }) 

});



router.post('/notes/remove/' , (req, res)=>{
    
    let note = req.body.note; 
    console.log('removing: ' + note); 
    console.log('username: ' + useName); 

    userModel.findOneAndUpdate({userName : useName} , {$pull : {notes : note}} , (err)=>{
        if(err){
            res.send('removal failed'); 
        }
        else{
            res.send('successfully removed '  + note); 
        }
    });

    



});

router.post('/notes/getName/' , (req, res)=>{
    console.log('reached /notes/getName/' )
    userModel.findOne({userName : useName}  , (err , documents)=>{
        if(err){

            res.send("the error is"); 
        }
        else{
            let name = documents.name ; 
            res.send(name); 
        } 
    }) 
});

   


router.post('/login' , (req, res)=>{
    

    userModel.find({userName:req.body.userName , pass:req.body.pass} , (err , documents)=>{
        if(err){
            res.send(err); 
        }
        else{
            
            if(documents.length == 0){
                res.send('login failed'); 
            }
            else{
                res.send(documents); 
                useName = req.body.userName; 


              }
        }
    })



})








      



module.exports = router  