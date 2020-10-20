import React ,{useEffect, useState} from 'react';
import axios from 'axios'; 
import Navbar from './Navbar'
function Notes(){

    //This is just a string because we are sending just one 
    //might have to make it an array at some point
    const[notes , setNote] = useState(String) ; 
    

   

   

    
    var dataArr = [] ; 
  
    
    const [dataSet , setDataSet] = useState([]); 
   
    const [dataList, setDataList] = useState(); 

    useEffect(() =>{
        console.log("Use Effect Notes.js");

        axios.post('/api/user/notes' ).then(res=>{
            dataArr = res.data[0].notes ; 
            //console.log(dataArr) ;
            console.log(dataArr); 
            setDataSet(res.data[0].notes); 
           
        }).catch(err=>{
            console.log('it didnt work' + err); 
        }); 


        console.log("The array that i got ");

       
    
        
    }, []) ;

     
    const DataList = dataSet.map((element)=>{
        return <div>{element}</div>
    })
    
    
    

    
    
    
       
        

    /*const taskList = task.map((object , index)=>{
        return <div className='row justify-content-center'>

            <h2>{object}</h2>

        </div>
    });*/

    function noteDown(event){
        event.preventDefault();
        
        var newNote ={
            notes : notes
        }

        console.log("note down " + newNote);
        axios.post('/api/user/notes/add' , newNote).then(res=>{
            console.log(res); 
        }).catch(err=>{
            console.log(err); 
        })


    }

    
        return(
        <div>
        <div> 
            <h1> Notes </h1>
            
       
        </div>
            <form onSubmit={noteDown}>
                <input type="text" placeholder="Note" className='form-control' value={notes}  onChange={(e)=>{setNote(e.target.value)}}/>
                <input type="submit" value="AddNote" className="btn btn-primary"/> 
                
            </form> 
            
            
            <div>{DataList}</div>
            
            
            
            
            
        </div> 

        
         
     
    ); 
}export default Notes; 

