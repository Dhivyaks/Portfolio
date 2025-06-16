import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/favicon.ico'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './Component/MERNStackAcademy'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>


    </>
  )
}

export default App
