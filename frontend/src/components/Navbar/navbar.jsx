import React from "react";

import axios from 'axios';
import { useForm } from 'react-hook-form'
import { Box, Center, Flex, Grid, GridItem, Icon, Input } from '@chakra-ui/react'
import './navBar.css'

export default function Navbar() {


return (
        <div className="navBar" >
            <Grid h='150px' w='100%' templateRows='repeat(20px, 10px)' alignItems={"center"}>
                <GridItem w='100px' m='auto' >
                    Ortopedia
                </GridItem>
                <GridItem w='100%'>
                    <Grid m='2px, 50px' templateColumns='repeat(3, 1fr)' gap={100} >
                        <GridItem display={"flex"} ml='40px' justifySelf={"initial"} >nombre secre/dr</GridItem>
                        <GridItem display={"flex"} justifySelf={"center"} >
                            <Input backgroundColor={"white"} placeholder="Buscar paciente" w='500px' ></Input>
                        </GridItem>
                        <GridItem display={"flex"} mr='40px' justifySelf={"end"} >fecha</GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </div>
)
}
