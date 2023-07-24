import {Input, Box, Button, HStack, Heading, Stack, VStack , Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.700'} minH={40} p={6} color={'whiteAlpha.600'}>
        <Stack direction={['column' ,'row']}>
        <VStack alignItems='stretch' w='full'>
            <Heading  pr={40} size="md" textTransform={'uppercase'}>
                Enquiry
            </Heading>
            <HStack borderBottom={'2px solid white'} py='4'>
                <Input type="text" placeholder='Message Us' 
                border={'none'} 
                borderRadius={'none'} 
                focusBorderColor='none' />
                <Button colorScheme='purple'
                variant={'ghost'} 
                borderRadius="0 20px 20px 0"
                ><AiOutlineSend size={15}/></Button>
            </HStack>
        </VStack>
        <VStack w='full' 
         textAlign={'center'}borderRight={['none' ,'1px solid white' ]}>
        <Heading textTransform={'uppercase'} textAlign={'center'}>Video opretor</Heading>
        <Text textTransform={'uppercase'}> all right received</Text>
        </VStack>
        <VStack>
          <Heading size={'md'} textTransform={'uppercase'} >
            Social Media
          </Heading>

          <Button variant={'link'}>
          <a target='blank'  href="https://youtube.com">Youtube</a></Button>
          
          <Button variant={'link'}>
          <a target='blank'  href="https://Facebook.com">Facebook</a></Button>
          
          <Button variant={'link'}>
          <a target='blank'  href="https://Instagram.com">Instagram</a></Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
