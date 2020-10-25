import React, {useState} from 'react'; 
import './Navbar.css';
import {Link, Redirect, Router, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Navbar() {
    return (<div>
           <p style={{color: 'white', fontWeight:'550', fontSize:'50px' , fontFamily:  "TimesNewRoman"}}> Simple Planner </p>
            <div className ='navbarOptions' style={{backgroundColor:  'rgba(39, 50, 54, 0.568)' , borderRadius : '10px' , margin: '20px' }}> 
        
            
            <ul>
                <Link to='/app/' exact style={{  fontSize:'30px', color: 'white' , fontFamily: "TimesNewRoman"}}>
                    
                    <li >
                        Register
                    </li>
                    
                    
                </Link>
                <Link to='/app/login/' exact  style={{fontSize:'30px', color: 'white',  fontFamily: "TimesNewRoman"}}>
                    <li>
                        Login
                    </li>
                    
                </Link>

                

            </ul>
            
           
            </div>
        </div>
    ); 
    
}

/*
<Link to='/app/notes/' exact  style={{fontSize:'30px', color: 'white', fontWeight:'700'}}>
                    <li>
                        Notes
                    </li>
                    
                </Link>
                */
export default Navbar ;