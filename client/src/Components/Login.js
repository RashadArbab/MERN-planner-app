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
            window.location.href = '/app/notes/'; 
            alert('Welcome Back'); 
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
                alert(res.data); 
                window.location.href("/app/login/");
            }
        }).catch(err =>{
            console.log(err); 
        })
    
    }



    return <div> 
        
        <h1 style={{color: 'white' , fontFamily: 'TimesNewRoman'}}>Login</h1>
        
        <form onSubmit={userExists}>
            
            <input type="text" placeholder="User Name" className='form-control' value={userName}  onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="text" placeholder="Password" className='form-control' value={pass}  onChange={(e)=>{setPass(e.target.value)}}/>
         
            <input type="submit" value="Login" className="btn btn-primary" style={{fontFamily: 'TimesNewRoman'}}/> 
            
    
        </form>
    </div>
}export default Login ; 