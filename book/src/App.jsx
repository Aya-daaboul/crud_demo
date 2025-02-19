import React from 'react'
import './App.css'
import Books from './pages/Books.jsx'
import Add from './pages/Add.jsx'
import Edit from './pages/Edit.jsx'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
function App() {
 

  return (
    <>
      <div className='APP'>
        <BrowserRouter>
         <Routes>
            <Route path="/" element={<Books/>}></Route>
            <Route path="/books" element={<Books/>}></Route>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/edit" element={<Edit/>}></Route>
         </Routes>
        
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
