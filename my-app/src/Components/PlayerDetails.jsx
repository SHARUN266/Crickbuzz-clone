import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Simple() {
  let nav = useNavigate();
  const [id, setId] = useState([]);
  useEffect(() => {
    Fetch();
  }, []);
  let playerId = localStorage.getItem("id");
  async function Fetch() {
    try {
      let res = await fetch(
        `https://api.cricapi.com/v1/players_info?apikey=044fb27c-fc05-4056-a585-41848c99abe0&id=${playerId}`
      );
      let data = await res.json();
      setId(data.data);
    } catch (err) {
      console.log(Error);
    }
  }
  console.log(id, "me function nhi hu kya");
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={id.playerImg}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {id.name}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              {id.role}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                Cricket is a team sport played between two teams of eleven
                players each.
              </Text>
              <Text fontSize={"lg"}>
                The winning team will be the team that scores the most runs at
                the end of a match. Different varieties of the game have
                different restrictions on the number of overs, the number of
                innings, and the number of balls in each. A draw is not an
                uncommon result and can occur if the team that is last to bat
                fails to match the required total of runs, or the bowling team
                fails to take 10 wickets, before a specified time limit.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                More Information
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Date of Birth</ListItem>
                  <ListItem>Birth of place</ListItem>{" "}
                  <ListItem>Country</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{id.dateOfBirth}</ListItem>
                  <ListItem>{id.placeOfBirth}</ListItem>
                  <ListItem>{id.country}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Inning Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Batting Style:
                  </Text>{" "}
                  {id.battingStyle}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Bowling Style:
                  </Text>{" "}
                  {id.bowlingStyle}
                </ListItem>

                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    SMS:
                  </Text>{" "}
                  This all data fetching from API.
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            onClick={() => {
              nav("/Search");
            }}
            bg={"background.teal"}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Back
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <Text>Made with love by Sharun</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
