import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import Banner from "./banner";
import data from "../data.json";


export default function Home() {
  const [news, setNews] = useState([]);
  console.log(data);
  useEffect(() => {
    setNews(data);
  }, []);
//  console.log(news, "newwww");
  return (
    <Box m="auto" w="70%" textAlign="justify" p="2%">
      <Banner />

      <Heading pt="2rem">Editorials</Heading>
      {data.map((elem) => (
        <Stack
          mt="5%"
          border="1px"
          borderRadius="5px"
          borderColor="gray.200"
          h={"auto"}
          direction={{ base: "column", md: "row" }}
        >
          <Flex flex={1}>
            <Image
              w="100%"
              alt={"Login Image"}
              objectFit={"cover"}
              src={elem.img}
            />
          </Flex>
          <Flex p={5} flex={1} justifyContent="flex-start">
            <Stack textAlign={"justify"}>
              <Box fontWeight="700" color={"gray"}>
                {elem.title}
              </Box>
              <Link fontSize="20px" fontWeight="bold" href={elem.link}>
                {elem.heading}
              </Link>
              <Box>{elem.news}</Box>
              <Box color="gray">{elem.time}</Box>
            </Stack>
          </Flex>
          <Image pr="2rem" h="3rem" w="5rem" src={"../img.png"} alt="img" />
        </Stack>
      ))}
    </Box>
  );
}
