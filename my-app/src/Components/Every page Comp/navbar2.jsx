import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Flex,
  Image,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import LiveCard from "../liveCard";


export default function SizeExample() {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };
  //fetching api for live crickets....
  const [match, setMatch] = useState([]);
  useEffect(() => {
    Fetch();
  }, []);
  async function Fetch() {

    setTimeout(async ()=>{
      try {
        let res = await fetch(
          "https://api.cricapi.com/v1/currentMatches/?apikey=044fb27c-fc05-4056-a585-41848c99abe0&offset=0"
        );
        let data = await res.json();
        setMatch(data.data);
      } catch (err) {
        console.log(Error);
      }

    },2000)
   
  }
  
 
  let arr = [
    "Salem Spartans vs Chepauk Super Gillies, 22nd Match",
    "Ireland Women vs Pakistan Women, 3rd Match",
    "Italy vs Isle of Man, Final",
  ];

  return (
    <>
      <Flex
        color="white"
        w="100%"
        bg="#555"
        h="3rem"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Flex
          p="1rem"
          alignItems="center"
          justifyContent="center"
          bg="#222"
          h="100%"
          w="10%"
          color="white"
        >
          Matches
        </Flex>
        {arr.map((elem) => (
          <Flex w="100%" alignItems="center" justifyContent="center" h="100%">
            {elem}
          </Flex>
        ))}
        <Button
          onClick={() => handleClick("md")}
          key={size}
          m={4}
          p="0rem 2rem"
          bg="#222"
          color="fontcolor.100"
        >
          
          {isOpen==true?"Close":"All"}
        </Button>
      </Flex>

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader >All Live Match <Image display="inline-flex" pl="1rem" h="30px" src="https://cdn-icons-png.flaticon.com/512/2865/2865183.png"/></DrawerHeader>
          <DrawerBody>
           {
            match.length==0?<Image src="https://smallenvelop.com/wp-content/uploads/2014/08/Preloader_51.gif" alt="img"/>:
            match.map((elem)=>(
              <SimpleGrid column={[2,3,4]} >
                
                <LiveCard
                img={elem.teamInfo[0].img}
                name={elem.name}
                time={elem.dateTimeGMT}
                date={elem.date}
                //score={elem.score[0].r===undefined?"null":elem.score[0].r}
                venue={elem.venue}
                status={elem.status}
                
                
                />
               
              </SimpleGrid>
            ))
           }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
