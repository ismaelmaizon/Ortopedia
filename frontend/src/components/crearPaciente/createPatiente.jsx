import React, { useState } from "react";

import axios from 'axios';
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,Card, CardHeader, CardBody, CardFooter, ButtonGroup, Heading, Grid, PinInput, PinInputField, Select, Switch, Checkbox, Flex, Stack, Radio, RadioGroup
} from '@chakra-ui/react'
import './createPatienet.css'
import { Link } from "react-router-dom";



export default function CreatePatient() {


const [val, setValue] = useState('1')
    
const {handleSubmit,register, getValues} = useForm()

function onSubmit(values) {
    return new Promise((resolve) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        }, 3000)
    })
}

const value = {value : getValues()}
const reg = register()
console.log(reg);

return (
    <div className='container_patient'>
        <h2 className='title_1'>Crear Paciente</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid templateRows={'repeat(25% 25% 25% 25%)'}  fontSize='40px' w='70%' m={"auto"} > 
                <h2 className='title_2'>Datos Personales (obligatorios)</h2>
                <Grid margin={25} padding={25} borderColor={"ActiveBorder"} borderRadius={"revert"} templateColumns={'repeat(2, 1fr)'} >
                <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Nombre</FormLabel>
                        <Input
                        type="text"
                        placeholder='Nombre'
                        backgroundColor='white'
                        {...register('Nombre')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Apellido</FormLabel>
                        <Input
                        type="text"
                        placeholder='Apellido'
                        backgroundColor='white'

                        {...register('Apellido')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Cel</FormLabel>
                        <Input
                        type="number"
                        placeholder='numero de telefono'
                        backgroundColor='white'

                        {...register('Cel')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Email</FormLabel>
                        <Input
                        type="number"
                        placeholder='ingrese e mail'
                        backgroundColor='white'

                        {...register('Email')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Fecha De Nacimiento</FormLabel>
                        <Input
                        type="datetime-local"
                        placeholder='ingresa tu email'
                        backgroundColor='white'

                        {...register('Nacimiento')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Ocupacion</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'
                        backgroundColor='white'

                        {...register('Ocupacion')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Genero</FormLabel>
                        <Select backgroundColor='white' placeholder='Select option' {...register('Genero')}>
                            <option value='Masculino'>Masculino</option>
                            <option value='Femenino'>Femenino</option>
                            <option value='Otro'>Otro</option>
                        </Select>
                    </FormControl>
                </Grid> 

                <h2 className='title_2'>Datos Medicos</h2>
                <Grid margin={25} padding={25} borderColor={"ActiveBorder"} borderRadius={"revert"} templateColumns={'repeat(2, 1fr)'} >    
                <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Peso</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Peso')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Altura</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Altura')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Calzado habitual</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Calzado')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Alergia</FormLabel>
                            <Select backgroundColor='white' placeholder='Select option' {...register('Alergia')} >
                                <option value1='Si'>Si</option>
                                <option value1='No'>No</option>
                            </Select>
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Diabetes</FormLabel>
                            <Select backgroundColor='white' placeholder='Select option' {...register('Diabetes')} >
                                <option value1='Si'>Si</option>
                                <option value1='No'>No</option>
                            </Select>
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Presion Arterial</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('PArterial')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Toma Medicacion</FormLabel>
                        <Select backgroundColor='white' placeholder='Select option' {...register('Medicacion')} mt={-5}>
                                <option value1='Si'>Si</option>
                                <option value1='No'>No</option>
                        </Select>
                        <FormLabel display={"flex"} mt={2} >¿Cual?</FormLabel>
                        <Input 
                        type="text"
                        placeholder='¿Cual?'                    
                        backgroundColor='white'

                        {...register('MedicacionCual')}/>
                        
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Piel</FormLabel>
                            <Select backgroundColor='white' placeholder='Select option' {...register('Piel')} mt={-5}>
                                <option value1='Normal'>Normal</option>
                                <option value1='Seca'>Seca</option>
                                <option value1='Hiperhidrasis'>Hiperhidrasis</option>
                                <option value1='Eromhidrasis'>Eromhidrasis</option>
                            </Select>
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Temperatura</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Temperatura')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel>Pulso</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Pulso')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Presion Arterial</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('PArterial')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Tipo de Pie</FormLabel>
                        <Select backgroundColor='white' placeholder='Select option' {...register('TPie')} mt={-5}>
                            <option value='Normal'>Normal</option>
                            <option value='Cavo'>Cavo</option>
                            <option value='Plano'>Plano</option>
                        </Select>
                    </FormControl>
                    <FormControl w='70%' mb={10} display={"flex"} flexDirection={"column"}>
                        <FormLabel display={"flex"}>Plantigrafia</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Plantigrafia')}
                        />
                    </FormControl>
                </Grid> 
            </Grid>
            <FormControl display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} >
                        <FormLabel display={"flex"} fontSize={25} >Agregar PDF</FormLabel>
                        <Input
                        type="file"
                        placeholder='User o Admin'                    
                        backgroundColor='white'

                        {...register('File')}
                        />
                    </FormControl>
            <ButtonGroup>
                <Button mt={10} colorScheme='teal' type='submit' onClick={()=> {
                    const paciente = getValues()
                    console.log(paciente);
                    
                    axios.post('http://localhost:8080/api/auth/createPatient', paciente)
                        .then(response => {
                            // Manejar la respuesta del servidor si es necesario
                            console.log('Paciente creado:', response.data);
                        })
                        .catch(error => {
                            // Manejar cualquier error que pueda ocurrir durante la solicitud
                            console.error('Error al crear el usuario:', error);
                        });
                }}>
                    Crear
                </Button>
                <Link to={'/Secretariado'}>
                    <Button mt={10} colorScheme='teal' type='submit' onClick={()=> {
                        const usuario = getValues()
                        console.log(usuario);
                        /*
                        axios.post('http://localhost:8080/api/auth/createUser', usuario)
                            .then(response => {
                                // Manejar la respuesta del servidor si es necesario
                                console.log('Usuario creado:', response.data);
                            })
                            .catch(error => {
                                // Manejar cualquier error que pueda ocurrir durante la solicitud
                                console.error('Error al crear el usuario:', error);
                            });*/
                    }}>
                        Cancelar
                    </Button>
                </Link>
            </ButtonGroup>
        </form>

    </div>
)
}


