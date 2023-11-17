import React from "react";

import axios from 'axios';
import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,Card, CardHeader, CardBody, CardFooter, ButtonGroup, Heading
} from '@chakra-ui/react'

export default function CreteUser() {
    
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
    <div>
        <form onSubmit={handleSubmit(onSubmit)}> 
            <Card margin={50} padding={50} borderColor={"ActiveBorder"} borderRadius={"revert"} >
                <Heading textAlign={"initial"} >Crear usuario</Heading>
                <FormControl>
                    <FormLabel>Nombre</FormLabel>
                    <Input
                    type="text"
                    placeholder='Nombre'
                    {...register('Nombre')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Apellido</FormLabel>
                    <Input
                    type="text"
                    placeholder='Apellido'
                    {...register('Apellido')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input
                    type="text"
                    placeholder='ingresa tu email'
                    {...register('email')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Password</FormLabel>
                    <Input
                    type="text"
                    placeholder='Password'
                    {...register('Password')}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel>Rol</FormLabel>
                    <Input
                    type="text"
                    placeholder='User o Admin'
                    {...register('rol')}
                    />
                </FormControl>
                <ButtonGroup>
                    <Button mt={4} colorScheme='teal' type='submit' onClick={()=> {
                        const usuario = getValues()
                        console.log(usuario);
                        axios.post('http://localhost:8080/api/auth/createUser', usuario)
                            .then(response => {
                                // Manejar la respuesta del servidor si es necesario
                                console.log('Usuario creado:', response.data);
                            })
                            .catch(error => {
                                // Manejar cualquier error que pueda ocurrir durante la solicitud
                                console.error('Error al crear el usuario:', error);
                            });
                    }}>
                        Crear
                    </Button>
                </ButtonGroup>
            </Card>
        </form>

    </div>
)
}


