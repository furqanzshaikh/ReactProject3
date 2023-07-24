import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerCloseButton,
    DrawerOverlay,
    DrawerContent,
    Button,
    useDisclosure,
    VStack,
    HStack
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
  import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {
const {isOpen,onOpen,onClose} = useDisclosure()
  return (
        <>
        <Button zIndex={'overlay'} pos={'fixed'} left={1} top={1} colorScheme='purple' padding={0} w={10} h={10} borderRadius={'full'} onClick={onOpen}>
            <BiMenuAltLeft size={24} />
        </Button>



        <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
          <DrawerOverlay/>
          <DrawerContent>
            <DrawerCloseButton/>
            <DrawerHeader color={"purple.300"}>
              Vedio Opretor
            </DrawerHeader >
            <DrawerBody>
            <VStack alignItems={'flex-start'}>
                <Button  colorScheme='purple' variant={'ghost'} onClick={onClose}
                >
                  <Link to={'/'}>Home</Link>
                </Button>
              
              

                <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                  <Link to={'/videos'}>Videos</Link>
                </Button>
              
                <Button onClick={onClose} colorScheme='purple' variant={'ghost'}>
                  <Link to={'/upload'}>Upload Video</Link>
                </Button>
              
                </VStack>

                <HStack pos={'absolute'} left={12} bottom={10} spacing={'10'}>

                  <Button onClick={onClose} colorScheme='purple' variant={'outline'}><Link to={'/login'}>Log in</Link></Button>

                  <Button colorScheme='purple' onClick={onClose}
                  variant={'outline'} ><Link to={'/signup'}>Sign up</Link></Button>
                </HStack>
              
            </DrawerBody>

          </DrawerContent>
        
          </Drawer>

        </>
  )
}

export default Header
