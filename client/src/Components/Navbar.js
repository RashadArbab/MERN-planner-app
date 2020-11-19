import React, {useState} from 'react'; 
import './Navbar.css';
import {Link, Redirect, Router, Switch} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function Navbar() {
    return (<div>
           <p className= 'AppTitle'> Simple Planner </p>
            <div className="navbarOptions"> 
        
            
            <ul  >
                <Link to='/app/' exact >
                    
                    <li className='link'>
                        Register
                    </li>
                    
                    
                </Link>
                <Link to='/app/login/' exact>
                    <li className='link'>
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