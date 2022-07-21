import { Heading,Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

import Sharun from "./modal";



export default function MatchList(){
//     const [list,setList]=useState([])
//     useEffect(()=> {
//        Fetch()
//     },[])
//    async function Fetch(){
//         try {
//             let res = await fetch('https://api.cricapi.com/v1/matches?apikey=044fb27c-fc05-4056-a585-41848c99abe0&offset=0');
//             let data = await res.json();
//             setList(data.data);
//         } catch (err) {
//             console.log(Error);
//         }
//     }
//     console.log(list,'match scheduelee');
    return (
        <Box w="80%" m="auto" textAlign={'justify'} p="5rem">
        <Heading>Cricket Schedule</Heading>
        <Sharun/>
        
        </Box>
    )
}