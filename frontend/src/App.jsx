import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import CreteUser from './components/CreateUser/createUser'
import NavBar from './components/Navbar/navbar'
import Secretariado from './components/Secretariado/secretariado'
import CreatePatient from './components/crearPaciente/createPatiente'
import Calendario from './components/Calendario/calendario'
import ProfesionalHC from './components/ProfesionalHC/profesionalHC'
import Profesional from './components/Profecional/profesional'
import Hc from './components/HC/hc'



function App() {
  return (
    <div className='container'>
        <NavBar/>
        <div className='container_body' >
          <Routes>
            <Route path="/CreteUser"  element= { <CreteUser/> } ></Route>
            <Route path="/CreatePatient"  element= { <CreatePatient/> } ></Route>
            <Route path="/Secretariado"  element= { <Secretariado/> } ></Route>
            <Route path="/Calendario"  element= { <Calendario/> } ></Route>
            <Route path="/Profesional"  element= { <Profesional/> } ></Route>
            <Route path="/Profesional/HC"  element= { <ProfesionalHC/> } ></Route>
            <Route path="/HC"  element= { <Hc/> } ></Route>
          </Routes>
        </div>
    </div>
  )
}

export default App
