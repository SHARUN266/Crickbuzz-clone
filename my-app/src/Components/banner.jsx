

import { Box, Button, Flex, Heading, Spacer,Image,Link } from '@chakra-ui/react'
import react from 'react'


export default function Banner(){
    return (
       <Flex color='fontcolor.100' h="auto" bgGradient='linear(to-r, gray.800, gray.400)' w="100"  direction={{ base: 'column', md: 'row' }}>
        <Box p="3rem" w="60%">
        <Heading  fontSize='2rem'>
        Get 15 Subscriptions with 1 Plan and save INR 10000!
        </Heading>
        <Box pt='1rem' as='span'>Cricbuzz Plus + Times Prime</Box>
        <Heading  fontSize='35px'>
        Annual Combo Plan
        </Heading>
        <Link  href="/">
        <Button _hover={'background.teal'} mt="5%" borderRadius='5px' p="0rem 2rem" bg='background.teal'>Unlock Now For INR 999</Button>
        </Link>
        </Box>
        <Spacer/>
        <Box p="3rem">

            <Image src="https://www.cricbuzz.com/a/img/v1/272x204/i1/c236257/hero_plan.jpg"/>
        </Box>
       </Flex>
    )
}