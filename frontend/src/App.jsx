import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Box, Button, ButtonGroup, Stack, Wrap, WrapItem } from '@chakra-ui/react'

function App() {
  return (
    <>
      <div>
      <h1>Vite + React</h1>
      <Stack direction='column'>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            py={12}
            bgImage="url('https://bit.ly/2Z4KKcF')"
            bgPosition='center'
            bgRepeat='no-repeat'
            mb={2}
          >
            <ButtonGroup gap='4'>
              <Button colorScheme='whiteAlpha'>WhiteAlpha</Button>
              <Button colorScheme='blackAlpha'>BlackAlpha</Button>
            </ButtonGroup>
          </Box>

          <Wrap spacing={4}>
            <WrapItem>
              <Button colorScheme='facebook'>Facebook</Button>
            </WrapItem>
            
          </Wrap>
      </Stack>
      
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
