import { useState } from 'react'
import './App.css'
import { Navbar } from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router";
import { Details } from './components/Details/Details';
import {Foods} from "./components/Foods/Foods"

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Foods />} />
        <Route path='/foods/:code' element={<Details />} />
      </Routes>
    </div>
  )
}

export default App
