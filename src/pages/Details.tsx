import { Link as ReactRouterLink } from "react-router-dom";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Image,
  Button,
  HStack,
  Box,
  VStack,
} from "@chakra-ui/react";

import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const film = location.state.film;
  return (
    <div>
      <TableContainer pl={10} pr={10} mr={2}>
        <Table size={["xs", "xs", "sm"]}>
          <Tbody>
            <Tr>
              <Td p={4} color={"white"}>
                <HStack justifyContent={"space-between"}>
                  <Text fontSize={["xl", "2xl", "3xl"]}>Movie Details</Text>
                  <ChakraLink as={ReactRouterLink} to="/film">
                    <Button bg={"#CB1A80"} color={"white"}>
                      X
                    </Button>
                  </ChakraLink>
                </HStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box
                  bg="white"
                  borderRadius={15}
                  width="40%"
                  m={"auto"}
                  mt={10}
                >
                  <Image
                    src="https://images4.alphacoders.com/132/1327480.png"
                    p={2}
                    h="15irem"
                    w="100%"
                    borderRadius={15}
                  ></Image>
                </Box>

                <VStack spacing={3} mt={8}>
                  <Text fontSize={["lg", "xl", "2xl"]} mb={4}>
                    Movie Title
                  </Text>
                  <Box
                    bg="white"
                    borderRadius={15}
                    h={"7vh"}
                    mb={4}
                    p={4}
                    w={"70vw"}
                    as="span"
                    textAlign="left"
                  >
                    <Text
                      fontSize={["sm", "lg", "xl"]}
                      color={"black"}
                      h={40}
                      overflow={"hidden"}
                      textOverflow={"fade"}
                    >
                      {film.title}
                    </Text>
                  </Box>
                  <Text mb={4} fontSize={["lg", "xl", "2xl"]}>
                    Description
                  </Text>
                  <Box
                    bg="white"
                    borderRadius={15}
                    h={"7vh"}
                    mb={4}
                    p={4}
                    w={"70vw"}
                    as="span"
                    textAlign="left"
                  >
                    <Text
                      fontSize={["sm", "lg", "xl"]}
                      color={"black"}
                      h={40}
                      overflow={"hidden"}
                      textOverflow={"fade"}
                    >
                      {film.opening_crawl}
                    </Text>
                  </Box>
                </VStack>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <VStack mt={2}>
                  <ChakraLink as={ReactRouterLink} to="/film">
                    <Button
                      bg={"#CB1A80"}
                      color={"white"}
                      borderRadius={15}
                      w={"80%"}
                      p={8}
                    >
                      <Text fontSize={["sm", "lg", "xl"]}>Close</Text>
                    </Button>
                  </ChakraLink>
                </VStack>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Details;
