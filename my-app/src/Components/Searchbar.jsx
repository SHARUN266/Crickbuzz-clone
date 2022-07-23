import React from "react";
import { Box, Input, Button } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { transform } from "framer-motion";

export default function SearchBar() {
  const [click, setClick] = useState([]);
  const [player, setPlayer] = useState([]);
  const [searchVal, setSearchVal] = React.useState([]);

  useEffect(() => {
    Fetch();
  }, []);
  async function Fetch() {
    try {
      let res = await fetch(
        `https://api.cricapi.com/v1/players?apikey=044fb27c-fc05-4056-a585-41848c99abe0&offset=0&search=${click}`
      );
      let data = await res.json();
      setSearchVal(data.data);
    } catch (err) {
      console.log(Error);
    }
  }

  const handleInput = (e) => {
    setPlayer(e.target.value);
  };
  function handleClick() {
    setClick(player);
    Fetch();
  }

  const handleClearBtn = () => {
    setSearchVal("");
  };

  return (
    <Box minH="80vh" maxH="auto" w="100%" className="container">
      <Box p="2rem" m="auto" w="90%">
        <Input
          w="20%"
          onChange={handleInput}
          id="product-search"
          type="search"
          name="product-search"
          placeholder="Search Players"
        />

        <Button
          borderRadius="none"
          bg="none"
          _hover={{ bg: "none" }}
          color="white"
          onClick={handleClick}
        >
          <SearchIcon />
        </Button>

        <i onClick={handleClearBtn} className="fas fa-times"></i>
      </Box>
      <Box p="4rem" fontSize="2xl" id="table" h="auto">
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th fontSize="3xl" color="white">
                  Name
                </Th>
                <Th fontSize="3xl" color="white">
                  Country
                </Th>
                <Th fontSize="3xl" color="white" isNumeric>
                  More
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {searchVal.map((elem) => (
                <Tr>
                  <Td key={elem.id}>{elem.name}</Td>
                  <Td>{elem.country}</Td>
                  <Td isNumeric>
                    {" "}
                    <Button
                      id={elem.id}
                      onClick={() => {
                        localStorage.setItem("id", elem.id);
                      }}
                      bg="background.teal"
                    >
                      <Link to={`/details/${elem.id}`}>See Details</Link>
                    </Button>{" "}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
