import React, {useState} from 'react'; 
import './Navbar.css';
import {Link, Redirect, Router, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Navbar() {
    return (<div>
           <p style={{color: 'white', fontWeight:'500', fontSize:'50px'}}> Simple Planner </p>
            <div className ='navbarOptions' style={{backgroundColor:'black'}}> 
        
            
            <ul>
                <Link to='/app/' exact style={{  fontSize:'30px', color: '#48c6ef',  fontWeight: '700'}}>
                    
                    <li >
                        Register
                    </li>
                    
                    
                </Link>
                <Link to='/app/login/' exact  style={{fontSize:'30px', color: '#48c6ef', fontWeight:'700'}}>
                    <li>
                        Login
                    </li>
                    
                </Link>

                <Link to='/app/notes/' exact  style={{fontSize:'30px', color: '#48c6ef', fontWeight:'700'}}>
                    <li>
                        notes
                    </li>
                    
                </Link>

            </ul>
            
           
            </div>
        </div>
    ); 
    
}
export default Navbar ;