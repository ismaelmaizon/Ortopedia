import React from 'react';
import axios from 'axios';
import { Button, Card, Grid, GridItem, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, flexbox, space } from '@chakra-ui/react';
import './secretariado.css'


export default function Secretariado() {

    const profesional = 'Profesional Asignado'

return (
    <div className='secretariado'>
        <div className='secretariado_header'>
            <h2 className='secretariado_header_title' >Calendario dia de la fecha</h2>
            <Button w='100%' mb='15px'  >Asignar Turno</Button>
        </div>
        <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                        <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                        <GridItem display={"flex"} justifySelf={"end"} >{profesional} </GridItem>
        </Grid>
        <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                        <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                        <GridItem display={"flex"} justifySelf={"end"} >{profesional}</GridItem>
        </Grid>
        <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                        <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                        <GridItem display={"flex"} justifySelf={"end"} >{profesional}</GridItem>
        </Grid>
        <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                        <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                        <GridItem display={"flex"} justifySelf={"end"} >{profesional}</GridItem>
        </Grid>
        <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                        <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                        <GridItem display={"flex"} justifySelf={"end"} >{profesional}</GridItem>
        </Grid>
    </div>
)
}
