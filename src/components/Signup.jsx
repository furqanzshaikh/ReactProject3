import { Text , Button, Container, Heading, Input, VStack, Avatar } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
const Signup = () => {
  return <Container maxW={'container.xl'} h={'120vh'} p={'15'} >
<form>
    <VStack alignItems={'stretch'} spacing={8} w={['full','96']} m={'auto'} my={16}>
        <Heading textAlign={'center'}>Video Opreator</Heading>
        <Avatar alignSelf={'center'} boxSize={32}></Avatar>

        
        <Input placeholder='Name' type='text' required focusBorderColor='purple.500'/>

        <Input placeholder='Email' type='email' required focusBorderColor='purple.500' />

        <Input placeholder='Password' type='password' required focusBorderColor='purple.500'  />

        

        
        <Button type='submit' colorScheme='purple'>
            Sign Up
        </Button>

        <Text alignSelf={'flex-end'}> Old User ? {'  '}
        <Button colorScheme='purple' variant={'link'}>
            <Link to={'/login'}>Login </Link>
        </Button>
        </Text>
        

    </VStack>
</form> 

  </Container>
}

export default Signup
