import React from 'react';
import axios from 'axios';
import { Button, Card, Grid, GridItem, Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr, flexbox, space } from '@chakra-ui/react';

// los estilos de esta ventana estan en app.css


export default function Profesional() {

    const profesional = 'HC'

return (
    <div className='conteiner_Dr'>
            <div className='conteiner_Dr2'>
                <h2>Hoy</h2>
            </div>
            <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                            <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                            <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                            <Button display={"flex"} justifySelf={"end"} >{profesional} </Button>
            </Grid>
            <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                            <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                            <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                            <Button display={"flex"} justifySelf={"end"} >{profesional} </Button>
            </Grid>
            <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                            <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                            <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                            <Button display={"flex"} justifySelf={"end"} >{profesional} </Button>
            </Grid>
            <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                            <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                            <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                            <Button display={"flex"} justifySelf={"end"} >{profesional} </Button>
            </Grid>
            <Grid w='90%' m='auto' mb='10px' p='12px' templateColumns='repeat(3, 1fr)' backgroundColor={'#00d4ff'} borderRadius="md">
                            <GridItem display={"flex"} justifySelf={"initial"} >fecha y hora</GridItem>
                            <GridItem display={"flex"} justifySelf={"center"} >datos paciente</GridItem>
                            <Button display={"flex"} justifySelf={"end"} >{profesional} </Button>
            </Grid>
    </div>
)
}
