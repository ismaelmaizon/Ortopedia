import { useState } from 'react'
import './App.css'
import { Box, Button, ButtonGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login/login'
import NavBar from './components/Navbar/navbar'


function App() {
  return (
    <div className='container'>
        <NavBar/>
        <div>
          <Routes>
            <Route path="/Login"  element= { <Login/> } ></Route>
          </Routes>
        </div>
      </div>
  )
}

export default App
