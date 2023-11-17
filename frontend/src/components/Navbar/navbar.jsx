import React from "react";

import axios from 'axios';
import { useForm } from 'react-hook-form'
import { Box, Center, Flex, FormControl, Grid, GridItem, Icon, IconButton, Input } from '@chakra-ui/react'
import './navBar.css'
import { SearchIcon } from '@chakra-ui/icons'



export default function Navbar() {

const {handleSubmit, register, getValues} = useForm()

function onSubmit(values) {
    return new Promise((resolve) => {
        setTimeout(() => {
        //alert(JSON.stringify(values, null, 2))
        resolve()
        }, 3000)
    })
}

console.log(register());
console.log(handleSubmit());

return (
        <div className="navBar" >
            <Grid h='150px' w='100%' templateRows='repeat(20px, 10px)' alignItems={"center"}>
                <GridItem w='300px' m='auto' >
                    Centro Pie Cordoba
                </GridItem>
                <GridItem w='100%'>
                    <Grid m='2px, 50px' templateColumns='repeat(3, 1fr)' gap={100} >
                        <GridItem display={"flex"} ml='40px' justifySelf={"initial"} >nombre secre/dr</GridItem>
                        <form onSubmit={handleSubmit(onSubmit)}> 
                            <FormControl display={"flex"} >
                                <Input backgroundColor={"white"} placeholder="Buscar paciente" w='400px' type="text" {...register('valor')} ></Input>
                                <IconButton aria-label='Search database' icon={<SearchIcon />} type='submit' onClick={()=> { console.log( getValues() );}}/>
                            </FormControl>
                        </form>
                        <GridItem display={"flex"} mr='40px' justifySelf={"end"} >fecha</GridItem>
                    </Grid>
                </GridItem>
            </Grid>
        </div>
)
}
