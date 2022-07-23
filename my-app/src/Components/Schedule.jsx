import {
  Heading,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Image,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export default function MatchList() {
  const [list, setList] = useState([]);
  useEffect(() => {
    Fetch();
  }, []);
  async function Fetch() {
    try {
      let res = await fetch(
        "https://api.cricapi.com/v1/matches?apikey=044fb27c-fc05-4056-a585-41848c99abe0&offset=0"
      );
      let data = await res.json();
      setList(data.data);
    } catch (err) {
      console.log(Error);
    }
  }
  //console.log(list, "match scheduelee");
  return (
    <Box w="100%" m="auto" textAlign={"justify"} p="5rem" >
      <Heading ml="1%" display={"flex"} gap="1rem">
        Cricket Schedule{" "}
        <Image
          h="40px"
          mt="0.5%"
          src="https://t4.ftcdn.net/jpg/01/18/06/01/240_F_118060147_9V9FMQeC9FHtT8dfjsSnzyhZTOYaDYcC.jpg"
        />{" "}
      </Heading>

      <TableContainer  >
        <Table mt="5%" size="md">
          <Thead bg="gray">
            <Tr>
              <Th color="fontcolor.100">Date</Th>
              <Th color="fontcolor.100">Team's Name</Th>

              <Th color="fontcolor.100">Venue</Th>
              <Th color="fontcolor.100">Status</Th>
            </Tr>
          </Thead>
          {list.length == 0
            ? "Please Wait!"
            : list.map((elem) => (
                <Tbody>
                  <Tr
                    _hover={{ bg: "groupHover.bg", color: "black" }}
                    cursor="pointer"
                  
                   
                  >
                    <Td key={elem.id} fontWeight="700">
                      {elem.date}
                    </Td>
                    <Td>{elem.name}</Td>
                    <Td>{elem.venue}</Td>
                    <Td>{elem.status}</Td>
                  </Tr>
                </Tbody>
              ))}
        </Table>
      </TableContainer>
    </Box>
  );
}
