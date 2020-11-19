import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'
import './Notes.css'
function Notes() {

    //This is just a string because we are sending just one 
    //might have to make it an array at some point
    const [notes, setNote] = useState(String);
    //const[index, setIndex] = useState(); 

    const [Name, setName] = useState(String);




    var dataArr = [];


    const [dataSet, setDataSet] = useState([]);


    useEffect(() => {
        console.log("Use Effect Notes.js");




        axios.post('/api/user/notes').then(res => {
            dataArr = res.data[0].notes;
            //console.log(dataArr) ;
            console.log(dataArr);
            setDataSet(res.data[0].notes);

        }).catch(err => {
            console.log('this didnt work' + err);
        });


        console.log("The array that i got ");

        axios.post('/api/user/notes/getName').then((res) => {
            console.log('client: we got something in return')
            console.log('client: Name received ' + res.data);
            setName(res.data);
        }).catch(err => {
            console.log('client: get name error');
            console.log(err);
            setName("tom")
        })


    }, []);


    const DataList = dataSet.map((element, num) => {
        if (num === 0) {
            console.log("cannot find any data");
        }
        else {
            return <div className="row justify-content-center">

                <h1 className="col-md-7 text-left m-1" style={{ color: "white", fontSize: "45px", fontFamily: "TimesNewRoman" }}> {num}. {element}</h1>
                <button className="btn btn-danger col-md-1 m-1" style={{ fontFamily: "varela" }} onClick={() => deleteTask(element)}>Delete</button>

            </div>
        }
    })




    function deleteTask(element) {
        var msg = {

            note: element
        }

        console.log("this is the Note" + element);

        console.log('msg being sent' + msg);
        axios.post('/api/user/notes/remove/', msg).then(res => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

        window.location.href = '/app/notes/'

    }


    function noteDown(event) {
        event.preventDefault();

        var newNote = {
            notes: notes
        }

        console.log("note down " + newNote);
        axios.post('/api/user/notes/add/', newNote).then(res => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
        window.location.href = '/app/notes/'


    }






    return (
        <div>
            <div>
                <h1 className="NoteName"> {Name}'s Notes </h1>


            </div>
            <form onSubmit={noteDown}>
                <input type="text" placeholder="Note" className='form-control' value={notes} onChange={(e) => { setNote(e.target.value) }}  style={{color: 'slateGray',  fontFamily: 'varela'}}/>
                <input type="submit" value="Add Note" className="btn btn-primary" style={{ fontFamily: 'varela'  }} />

            </form>


            <div>{DataList}</div>





        </div>




    );
} export default Notes;

