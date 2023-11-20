import React from 'react';
import axios from 'axios';
import { Button, Card, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, flexbox, space } from '@chakra-ui/react';
import './hc.css'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Hc() {
const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    } = useForm()

    function onSubmit(values) {
    return new Promise((resolve) => {
        setTimeout(() => {
        alert(JSON.stringify(values, null, 2))
        resolve()
        }, 3000)
    })
    }    

const profesional = 'HC'

return (
    <div className='profesional'>
        <div className='profesional_container1'>
            <div className='profesional_container1_title'>
                <h2>Ultima evolucion de: Nombre de paciente</h2>
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)} className='profesional_form' >
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor='name'>First name</FormLabel>
                    <Input
                    backgroundColor={'white'}
                    id='name'
                    placeholder='name'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='name'>First name</FormLabel>
                    <Input
                    backgroundColor={'white'}
                    id='name'
                    placeholder='name'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                    <FormLabel htmlFor='name'>Evolucion</FormLabel>
                    <Input
                    h='150'
                    backgroundColor={'white'}
                    id='name'
                    placeholder='Descripcion del problema'
                    {...register('name', {
                        required: 'This is required',
                        minLength: { value: 4, message: 'Minimum length should be 4' },
                    })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                
            </form>
            <Grid m='2px, 50px' templateColumns='repeat(3, 1fr)' gap={100} >
                    <Link to='/Profesional/HC'>
                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                            agregar nueva
                        </Button>
                    </Link>
                    <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                        editar
                    </Button>
                    <Link to='/Profesional'>
                        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
                            salir
                        </Button>
                    </Link>
            </Grid>
        </div>
        <div className='profesional_container2'>
            <div className='profesional_container2_title'>
                <h1>Evoluciones anteriores</h1>
            </div>
            <Card mt='15px' backgroundColor={'#036798'} >
                <Button m={5} >fecha y hora </Button>
                <Button m={5} >fecha y hora </Button>
                <Button m={5} >fecha y hora </Button>
                <Button m={5} >fecha y hora </Button>
                <Button m={5} >fecha y hora </Button>
                <Button m={5} >fecha y hora </Button>
            </Card>
        </div>
    </div>
)
}
