import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Add = () => {
    const[book,setBook]= useState({
        title:"",
        decription:"",
        cover:"",
    }) //set state in order to send to server backend

    const handleChange =(e) =>{
        setBook((prev)=>({...prev, [e.target.name]:e.target.value}));
    } //updated whenever it is updated in the form
    console.log(book);

    const navigate = useNavigate() //go back to main page after adding

    //asyn await backend 
    const handleClick = async e=>{
        e.preventDefault(); //to prevent refreshing page after clicking add
        try{
            //the book objocet is the one we enetered in the form and used state to set it as a json element
            await axios.post("http://localhost:8800/books",book)
            //to go back to home page after adding a book
            navigate("/");
        }
        catch(error){
            console.log(error);
        }
    }

    
  return (
    <div className='form'>
        <h1>add a book</h1>
        //the names match the ones in the book
        <input type='text' name='title' onChange={handleChange} placeholder='title'></input>
        <input type='text' name='decription' onChange={handleChange} placeholder='desc'></input>
        <input type='text' name='cover' onChange={handleChange} placeholder='cover'></input>
      <button onClick={handleClick}>ADD</button>
    </div>
  )
}

export default Add
