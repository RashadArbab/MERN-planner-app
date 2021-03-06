import React, {useState} from 'react' ;
import axios from 'axios'; 
import Navbar from './Navbar';
import './Register.css' ; 

function Register(){

    const[name , setName] = useState(String)
    const[userName , setUserName] = useState(String)
    const[pass, setPass] = useState(String)
    const[passCheck, setPassCheck] = useState(String)
    const [notes , setNotes] = useState([String]);  
    
    

  


    function signUp(){
       
        
        var users = {
            name : name ,
            userName : userName , 
            pass: pass , 
            notes : notes 
        }

        
        axios.post('/api/user/register', users).then(res=>{
            console.log(res); 
        }).catch(err=>{
            console.log(err); 
        });

        console.log(users);
        
        window.location.href = '/app/login/'; 
    }

    function passwordCheck(event){
        event.preventDefault();

        if(pass === passCheck){
            signUp(); 
        }
        else{
            alert("Sorry the passwords do not match"); 
        }
    }

    return <div> 
        
        <h1 className="RegisterSignUp">Sign Up</h1>
       
        <form onSubmit={passwordCheck}>
            <input type="text" placeholder="Name" className='form-control' value={name} 
            onChange={(e)=>{setName(e.target.value)} } style={{color: 'slateGray',  fontFamily: 'varela'}}/>

            <input type="text" placeholder="User Name" className='form-control' value={userName}  
            onChange={(e)=>{setUserName(e.target.value)}} style={{color: 'slateGray',  fontFamily: 'varela'}}/>

            <input type="text" placeholder="Password" className='form-control' value={pass}  
            onChange={(e)=>{setPass(e.target.value)}} style={{color: 'slateGray',  fontFamily: 'varela'}}/>

            <input type="text" placeholder="Confirm Password" className='form-control' value={passCheck}  
            onChange={(e)=>{setPassCheck(e.target.value)}} style={{color: 'slateGray',  fontFamily: 'varela'}}/>
           
            <input type="submit" value="Register" className="btn btn-primary" style={{fontFamily: 'varela'}}/> 
            
    
        </form>
    </div>
}export default Register ;  