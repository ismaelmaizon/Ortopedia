import React from "react";


import { useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,Card, CardHeader, CardBody, CardFooter, ButtonGroup, Heading
} from '@chakra-ui/react'

export default function Login() {
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
            <Card padding={5} borderColor={"ActiveBorder"} borderRadius={"revert"} >
                <Heading textAlign={"initial"} >Inicio de sesion</Heading>
                <FormControl>
                    <FormLabel>email</FormLabel>
                    <Input
                    type="text"
                    placeholder='ingresa tu email'
                    {...register('email')}
                    />
                    <FormErrorMessage>
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel>code</FormLabel>
                    <Input
                    type="text"
                    placeholder='code'
                    {...register('code')}
                    />
                    <FormErrorMessage>
                    </FormErrorMessage>
                </FormControl>
                <ButtonGroup>
                    <Button onClick={()=> console.log({value : getValues()})} mt={4} colorScheme='teal' type='submit'>
                        Iniciar sesion
                    </Button>
                    <Button mt={4} colorScheme='teal' type='submit'>
                        Olvide mi contraseña
                    </Button>
                </ButtonGroup>
            </Card>
        </form>

    </div>
)
}


