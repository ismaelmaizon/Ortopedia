import { useState } from 'react'
import './App.css'
import { Box, Button, ButtonGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login/login'
import NavBar from './components/Navbar/navbar'
import Secretariado from './components/Secretariado/secretariado'


function App() {
  return (
    <div className='container'>
        <NavBar/>
        <div className='container_body' >
          <Routes>
            <Route path="/Login"  element= { <Login/> } ></Route>
            <Route path="/Secretariado"  element= { <Secretariado/> } ></Route>
          </Routes>
        </div>
      </div>
  )
}

export default App
