import {
    Button,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    Box,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useState } from 'react';
import data from '../data.json'
  
  export default function Home() {
   const [news,setNews]=useState([])
   console.log(data);
   useEffect(()=>{
         setNews(data)
   },[])
   console.log(news,'newwww');
    return (
        <Box  m="auto" w="70%" textAlign='justify' p="5%">
      <Heading pb='1rem'>Editorials</Heading>
      {
      data.map((elem)=>(

      
           
      <Stack mt="5%"   border="1px" borderRadius="5px" borderColor="gray.200"   h={'30vh'} direction={{ base: 'column', md: 'row' }}>
         <Flex  flex={1}>
          <Image
          w="100%"
            alt={'Login Image'}
            objectFit={'cover'}
            src={
             elem.img
            }
          />
        </Flex>
        <Flex p={5} flex={1}  justifyContent="flex-start">
          <Stack textAlign={'justify'} >
            <Box >{elem.title}</Box>
            <Box  >{elem.heading}</Box>
            <Box>{elem.news}</Box>
             <Box>{elem.time}</Box>
           
          </Stack>
        </Flex>
        <Image pr="2rem" h="25%" src={'../img.png'} alt='img'/>
       
      </Stack>
      ))}
      </Box>
    );
  }