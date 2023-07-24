import React, { useState } from 'react'
import one from '../assets/1.mp4'
import two from '../assets/video2.mp4'
import three from '../assets/video3.mp4'
import four from '../assets/video4.mp4'
import five from '../assets/video5.mp4'
import { Text,VStack,Stack, Heading, Button } from '@chakra-ui/react'

const Videos = () => {

  const videoArr =[one,two,three,four,five]
const [videosrc ,setVideosrc] = useState(videoArr[0])


  return (
    <Stack direction= {['column','row']}
    h={'100vh'}>
      <VStack w={'full'}>
      <video controls controlsList='nodownload' src={videosrc}
      style={{width:'100%'}} ></video>
      <VStack alignItems={'flex-start'} pl={4} w={'full'} overflowY={'auto'}>
      <Heading>VIDEO 1</Heading>
        <Text>Sample Video</Text>
        </VStack>
        </VStack>
        <VStack w={['full','xl']}alignItems={'stretch'} p={8} overflowY={'auto'}>
        
      {
        videoArr.map((item , index)=>(
          <Button variant={'ghost'} colorScheme='purple' onClick={()=>setVideosrc(item)}>
              video {index+1}
            </Button>
        ))}
        </VStack>
    </Stack>
  )
}

export default Videos
