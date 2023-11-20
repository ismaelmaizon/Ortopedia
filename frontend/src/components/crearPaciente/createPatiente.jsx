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
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Nombre</FormLabel>
                        <Input
                        type="text"
                        placeholder='Nombre'
                        backgroundColor='white'
                        {...register('Nombre')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Apellido</FormLabel>
                        <Input
                        type="text"
                        placeholder='Apellido'
                        backgroundColor='white'

                        {...register('Apellido')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Cel</FormLabel>
                        <Input
                        type="number"
                        placeholder='numero de telefono'
                        backgroundColor='white'

                        {...register('Cel')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Fecha De Nacimiento</FormLabel>
                        <Input
                        type="datetime-local"
                        placeholder='ingresa tu email'
                        backgroundColor='white'

                        {...register('Nacimiento')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Ocupacion</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'
                        backgroundColor='white'

                        {...register('Ocupacion')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25}>
                        <FormLabel>Genero</FormLabel>
                            <RadioGroup onChange={setValue} val={val}>
                                <Stack direction='row'>
                                    <Radio val='Masculino' backgroundColor='white'>M</Radio>
                                    <Radio val='Femenino' backgroundColor='white' >F</Radio>
                                    <Radio val='Otro' backgroundColor='white' >otro</Radio>
                                </Stack>
                            </RadioGroup>
                    </FormControl>
                </Grid> 

                <h2 className='title_2'>Datos Medicos</h2>
                <Grid margin={25} padding={25} borderColor={"ActiveBorder"} borderRadius={"revert"} templateColumns={'repeat(2, 1fr)'} >    
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Peso</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Peso')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Altura</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Altura')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Calzado habitual</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Calzado')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel htmlFor='isRequired' display={"flex"} >Alergia</FormLabel>
                        <Switch id='isRequired' isRequired display={"flex"} />

                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel htmlFor='isRequired' display={"flex"}>Diabetes</FormLabel>
                        <Switch id='isRequired' isRequired display={"flex"}/>

                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                            <FormLabel htmlFor='isRequired' display={"flex"}>Hipertension Arterial</FormLabel>
                            <Switch id='isRequired' isRequired />
                            <FormLabel htmlFor='isRequired' marginLeft='25px' display={"flex"} >Controlada?
                                <div>
                                    <Stack spacing={5} direction='row'>
                                        <Checkbox isDisabled>Checkbox</Checkbox>
                                        <Checkbox isDisabled defaultChecked>Checkbox</Checkbox>
                                    </Stack>     
                                </div>
                            </FormLabel>

                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel display={"flex"}>Toma Medicacion</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Medicacion')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel display={"flex"}>Piel</FormLabel>
                    
                        <Select backgroundColor='white' placeholder='Select option'  {...register(`${value}`)}>
                            <option value='Normal'>Normal</option>
                            <option value='Seca'>Seca</option>
                            <option value='Hiperhidrasis'>Hiperhidrasis</option>
                            <option value='Eromhidrasis'>Eromhidrasis</option>
                        </Select>

                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel display={"flex"}>Temperatura</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Temperatura')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel>Pulso</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('Pulso')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel display={"flex"}>Presion Arterial</FormLabel>
                        <Input
                        type="text"
                        placeholder='ingresa tu email'                    
                        backgroundColor='white'

                        {...register('PArterial')}
                        />
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
                        <FormLabel display={"flex"}>Tipo de Pie</FormLabel>
                        <Select backgroundColor='white' placeholder='Select option'>
                            <option value='Normal'>Normal</option>
                            <option value='Cavo'>Cavo</option>
                            <option value='Plano'>Plano</option>
                        </Select>
                    </FormControl>
                    <FormControl w='70%' mb={25} display={"flex"} >
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


