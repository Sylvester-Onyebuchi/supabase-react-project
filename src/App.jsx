import { Button, Input } from 'antd'
import React from 'react'
import ThemeProvider from './theme'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import PublicLayout from './layout/Public-layout'

function App() {
  return (
   <ThemeProvider>
    <BrowserRouter>
    <Toaster
    position='top-right'
    toastOptions={{
      duration: 3000,
      style:{
        background: "#333",
        color:"#fff",
        borderRadius: "8px"
      }
    }}
    />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
   </ThemeProvider>
  )
}

export default App