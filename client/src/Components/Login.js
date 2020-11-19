import React, {useState} from 'react' ;
import axios from 'axios'; 
import Navbar from './Navbar'; 

function Login(){

    
    const[userName , setUserName] = useState('')
    const[pass, setPass] = useState('')
   


    function login(){
        

        var user = {
            
            userName : userName , 
            pass: pass 
        }
       
        
        axios.post('/api/user/login' , user).then(res =>{
            console.log(res.data);

            if (res.data === "login failed"){
                alert(res.data); 
                window.location.href = '/app/login/'; 
            }
            else {
                
                axios.post('/api/user/notes/getName ').then(res=>{
                    var name = res.data ; 
                    console.log('client: login: name revceived: ' + name)
                    alert('welcome back ' + name)
                    window.location.href = '/app/notes/';  
                })

               
                
            }

        }).catch(err =>{

            console.log(err); 
        });
        

        
    }

    function userExists(event) {
        var tempUser = {
            tempUserName : userName 
        }

        event.preventDefault(); 
        console.log("we ran userExists"); 
        console.log("ueserExists userName " + userName)
        axios.post("/api/user/login-exists/" , tempUser).then(res=>{
            if (res.data === true){
                console.log('this is the res.data ' + res.data); 
                login(); 
            }
            else{
                window.location.href = "/app/login/" ;
                alert(res.data); 
                
            }
        }).catch(err =>{
            console.log(err); 
        })
    
    }



    return <div> 
        
        <p style={{color: 'white' , fontSize: "25px", fontFamily: 'Varela'}}>Login</p>
        
        <form onSubmit={userExists}>
            
            <input type="text" 
            placeholder="Username" 
            className='form-control' 
            value={userName}  
            onChange={(e)=>{setUserName(e.target.value)}}
            style={{color: 'slateGray',  fontFamily: 'varela'}}/>
            
            
            <input type="text" 
            placeholder="Password"
            className='form-control' 
            value={pass}  onChange={(e)=>{setPass(e.target.value)}} 
            style={{color: 'slateGray',  fontFamily: 'varela'}}/>
         
            <input type="submit" value="Login" className="btn btn-primary" style={{color: 'white' , fontFamily : 'varela'}} /> 
            
    
        </form>
    </div>
}export default Login ; 