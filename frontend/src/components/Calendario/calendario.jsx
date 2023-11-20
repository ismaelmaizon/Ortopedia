import React from 'react';
import axios from 'axios';
import { Box, Button, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';



export default function Calendario() {


return (
    <div className='secretariado'>
        <div className='secretariado_header'>
            <h2 className='secretariado_header_title' >Calendario</h2>
        </div>
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab backgroundColor={'#020024'}>semanas</Tab>
                <Tab backgroundColor={'#020024'}>Mes</Tab>
                <Tab backgroundColor={'#020024'}>Año</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <p>one!</p>
                <SimpleGrid minChildWidth='120px' spacing='40px'>
                    <Button bg='tomato' height='80px'>Lunes</Button>
                    <Button bg='tomato' height='80px'>Martes</Button>
                    <Button bg='tomato' height='80px'>Miercoles</Button>
                    <Button bg='tomato' height='80px'>Jueves</Button>
                    <Button bg='tomato' height='80px'>Viernes</Button>
                </SimpleGrid>
                </TabPanel>
                    <TabPanel>
                    <p>two!</p>
                    <SimpleGrid minChildWidth='120px' spacing='40px'>
                        <Button bg='tomato' height='80px'>Enero</Button>
                        <Button bg='tomato' height='80px'>Febrero</Button>
                        <Button bg='tomato' height='80px'>Marzo</Button>
                        <Button bg='tomato' height='80px'>Abril</Button>
                        <Button bg='tomato' height='80px'>Mayo</Button>
                        <Button bg='tomato' height='80px'>Junio</Button>
                        <Button bg='tomato' height='80px'>Julio</Button>
                        <Button bg='tomato' height='80px'>Agosto</Button>
                        <Button bg='tomato' height='80px'>Septiembre</Button>
                        <Button bg='tomato' height='80px'>Octubre</Button>
                        <Button bg='tomato' height='80px'>Noviembre</Button>
                        <Button bg='tomato' height='80px'>Diciembre</Button>
                    </SimpleGrid>
                    </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
)
}