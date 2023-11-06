import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home/Home'
import './App.css'
import Header from './components/Header/Header'
import Create from './pages/Create/Create'
import Gallery from './pages/Gallery/Gallery'
import Detail from './pages/Detail/Detail'

function App() {

  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/crewmate/:id" element={<Detail />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
