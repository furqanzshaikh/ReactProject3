import { Avatar, Button, Heading, Input, VStack } from '@chakra-ui/react'
import React from 'react'

const Forget = () => {
  return (
    
    <form>
    <VStack p={10} h={'100vh'}>
        <Avatar mt={10} mb={10} w={20} h={20}></Avatar>
        <Heading>Forget Password?</Heading>
        <Input type='email' w={'50%'} p={'25'} mt={'20'} mb={'20'} placeholder='Enter email'  required/>
        <Button type='submit' variant={'ghost'} colorScheme='purple' > Send Email</Button>

    </VStack>
    </form>
  )
}

export default Forget
