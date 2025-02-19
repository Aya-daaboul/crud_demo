import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

const Books = () => { //function books componenet
    const [books,setBooks]=useState([]);
    useEffect(()=>{
        //booksfetched is a function to fetch all data
        const booksfetched = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                console.log(res)
                console.log('fetching')
                setBooks(res.data)
            }
            catch(err){
                console.log(err); 
                // we will get err backedn server rejects to solve do 
            }
        }
        booksfetched();
    },[]) //end use effect


    const handleDelete =async(id)=>{
        console.log('Deleting book with id:', id);
        try{
            await axios.delete("http://localhost:8800/books/"+id)
            window.location.reload();
        }
        catch(err){
            console.log(err);
        }
    }

  return (
    <>
    <div className='books'>
        {/* fetch book data from api server but i need axios server allow req using react app */}
      {books.map(book=>(
        <div className='book_display' key={book.id}>
            <h2>{book.title}</h2>
            <h5>{book.decription}</h5>
            <h3>debuf</h3>
            <button onClick={()=>handleDelete(book.id)}>
                    delete
            </button>
            <button>
                <Link to='/add'>Add a new Book</Link>
            </button>
        </div>
        
      ))}
                

            

    </div>
    </>
  )
}

export default Books
