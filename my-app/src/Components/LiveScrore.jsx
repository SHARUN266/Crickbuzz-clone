
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Box,
  Td,
  TableCaption,
  TableContainer,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import Home from "./Home";

export default function LiveScore() {
  const [score, setScore] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.cricapi.com/v1/cricScore?apikey=044fb27c-fc05-4056-a585-41848c99abe0"
    )
      .then((response) => response.json())
      .then((response) => setScore(response.data, "me res hu"))
      .catch((err) => console.error(Error));
  }, []);
  return (
    <Box w="90%" m="auto" textAlign="center" mt="5%">
      <Heading color={"red"}>Live Scores</Heading>
      <SimpleGrid py={6} gap="3rem" mt="1%" columns={[2, 3, 3]}>
        {score.length == 0
          ? "Loading..."
          : score.map((elem) => (
              <Box
                maxW={"330px"}
                w={"full"}
                bg={"white"}
                boxShadow={"2xl"}
                rounded={"md"}
                overflow={"hidden"}
                p="2rem"
              >
                {elem.t1s == "" ? (
                  ""
                ) : (
                  <Image
                    h="40px"
                    src="https://cdn-icons-png.flaticon.com/512/2150/2150463.png"
                  />
                )}
                <Text fontWeight="500" color={"blue"} fontSize="20px">
                  {elem.t1} <Text color="red">Vs</Text> {elem.t2}
                </Text>
                <Box color="gray" textAlign="justify">
                  <Text mt="5%" display="flex" gap="2rem">
                    {" "}
                    Date&Time:{" "}
                    <Text fontWeight="500" color="black">
                      {elem.dateTimeGMT}
                    </Text>
                  </Text>
                  <Text mt="5%" display="flex" gap="2rem">
                    Match Type:{" "}
                    <Text fontWeight="500" color="black">
                      {elem.matchType == "" ? "Not Updated" : elem.matchType}{" "}
                    </Text>
                  </Text>
                  <Text mt="5%" display="flex" gap="2rem">
                    Status:{" "}
                    <Text fontWeight="500" color="yellow.400">
                      {elem.status}{" "}
                    </Text>
                  </Text>
                  <Text mt="5%" display="flex" gap="2rem">
                    Team 1 Score:{" "}
                    <Text fontWeight="500" color="black">
                      {elem.t1s == "" ? "Not Update Yet" : elem.t1s}{" "}
                    </Text>
                  </Text>
                  <Text mt="5%" display="flex" gap="2rem">
                    Team 2 Score:{" "}
                    <Text fontWeight="500" color="black">
                      {elem.t2s == "" ? "Not Update Yet" : elem.t2s}{" "}
                    </Text>
                  </Text>
                </Box>
              </Box>
            ))}
      </SimpleGrid>
    </Box>
  );
}
