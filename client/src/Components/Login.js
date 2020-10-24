import React, {useState} from 'react' ;
import axios from 'axios'; 
import Navbar from './Navbar'; 

function Login(){

    
    const[userName , setUserName] = useState('')
    const[pass, setPass] = useState('')
   


    function login(event){
        event.preventDefault(); 

        var user = {
            
            userName : userName , 
            pass: pass 
        }
        
        axios.post('/api/user/login' , user).then(res =>{
            console.log(res);
            window.location.href = '/app/notes/'; 
            alert('Welcome Back'); 

        }).catch(err =>{

            console.log(err); 
        });
        

        
    }



    return <div> 
        
        <h1 style={{color: 'white'}}>Login</h1>
        
        <form onSubmit={login}>
            
            <input type="text" placeholder="User Name" className='form-control' value={userName}  onChange={(e)=>{setUserName(e.target.value)}}/>
            <input type="text" placeholder="Password" className='form-control' value={pass}  onChange={(e)=>{setPass(e.target.value)}}/>
         
            <input type="submit" value="Login" className="btn btn-primary"/> 
            
    
        </form>
    </div>
}export default Login ; 