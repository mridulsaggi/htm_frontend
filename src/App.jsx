import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar.tsx'
import Home from './components/home.tsx'
import Intropage from './components/intro.tsx'
import Form from './components/form.tsx'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <>
    
      <Navbar/>
      <Home/>
      <Intropage/>
      <Form/>
      <Toaster/>
    </>
  )
}

export default App
