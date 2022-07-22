import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    MenuItem,
    
  } from '@chakra-ui/react';
import { useState } from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../useContext';

  
  export default function SimpleCard() {
  
    const {isAuth,setIsAuth}=useContext(UserContext)
    const navigate=useNavigate()
    
    function handleAuth(){
        setIsAuth(true)
      //  navigate('/')

    }
  
   
   
    return (
      <Flex
          mt="-6%"
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>

          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <NavLink to="/" color={'blue.400'}>Forgot password?</NavLink>
                </Stack>
              
                <Button
                  bg={'background.teal'}
                  color={'white'}
                  _hover={{
                    bg: 'background.teal',
                  }}
                  onClick={handleAuth}
                  >
                 Sign In
                </Button>
                
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }