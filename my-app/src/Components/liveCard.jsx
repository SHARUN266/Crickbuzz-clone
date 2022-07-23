import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  
} from "@chakra-ui/react";

function LiveCard({ name, img, time, date, venue, status }) {
  return (
    <Center py={6}>
      <Box
        maxW={"345px"}
        w={"full"}
        bg="white"
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"220px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <Image h="100%" w="100%" src={img} layout={"fill"} />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Match
          </Text>
          <Heading color="red" fontSize={"2xl"} fontFamily={"body"}>
            {name}
          </Heading>
          <Heading color={"gray.500"}>
            Score:-{Math.floor(Math.random() * 200)}
          </Heading>
          <Text color="black">{status}</Text>
          <Text color="black" fontSize="12px">
            {venue}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar src={img} alt={"Author"} />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>Time:-{time}</Text>
            <Text color={"gray.500"}>{date}</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}

export default LiveCard;
