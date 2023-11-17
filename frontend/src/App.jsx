import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import CreteUser from './components/CreateUser/createUser'
import NavBar from './components/Navbar/navbar'
import Secretariado from './components/Secretariado/secretariado'
import ProfesionalHC from './components/Profecional/ProfesionalHC/profesionalHC'
import Profesional from './components/Profecional/profesional'


function App() {
  return (
    <div className='container'>
        <NavBar/>
        <div className='container_body' >
          <Routes>
            <Route path="/CreteUser"  element= { <CreteUser/> } ></Route>
            <Route path="/Secretariado"  element= { <Secretariado/> } ></Route>
            <Route path="/Profesional"  element= { <Profesional/> } ></Route>
            <Route path="/Profesional/HC"  element= { <ProfesionalHC/> } ></Route>
          </Routes>
        </div>
    </div>
  )
}

export default App
