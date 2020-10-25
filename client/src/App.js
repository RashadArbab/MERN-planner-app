import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'; 
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 
import Register from './Components/Register';
import Login from './Components/Login'; 
import Notes from './Components/Notes' ;
import Navbar from './Components/Navbar'; 
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

function App() {
  
  const[getDefault , setDefault] = useState(String); 

  

  

  return (
    <div className="App">

    
     
      
      <div className="App">
      
      <BrowserRouter> 

      <Navbar/>
      
      
          <Switch>
          <Route path ='/' exact>
            <Redirect to='/app/' />
          </Route>
          <Route path='/app/' component={Register} exact /> 
          
          <Route path='/app/login/' component={Login} exact/> 
            
          <Route path='/app/notes/' component={Notes} exact/> 
          </Switch>
          
          </BrowserRouter>
      
    </div>
    
      
    
      
      </div>
  );
}
/*
<div className='row'>
            <div className='col-md-6'>
              <Registe 
            </div> 
            <div className='col-md-6'>
              <Login/>
            </div>
          </div>

          <div className ='row justify-content-center' >
            <div className='col-md-8 '>
              <Notes/>
            </div>
          </div>

*/
export default App;
