import { useState } from 'react'
import './App.css'
import { Box, Button, ButtonGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react'
import {Route, Routes} from 'react-router-dom'
import Login from './components/Login/login'


function App() {
  return (
      <div>
        <Routes>
          <Route path="/Login"  element= { <Login/> } ></Route>
        </Routes>
      </div>
  )
}

export default App
