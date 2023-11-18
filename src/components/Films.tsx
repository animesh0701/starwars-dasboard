import React from "react";
import { useState } from "react";
import moment from "moment";
import { SimpleGrid } from "@chakra-ui/react";
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
  HStack,
  Spinner,
  Button,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
import useFilms from "../hooks/useFilms";
import FilmCard from "./FilmCard";
import switch0 from "../assets/switch0.svg";
import switch1 from "../assets/switch1.svg";
import FilmLogo from "../assets/icons/films.svg";
import Menu from "../assets/Menu.svg";

const Films = () => {
  const { films, error, loading } = useFilms();
  const [grid, setGrid] = useState(true);

  return (
    <>
      <HStack justifyContent={"space-between"} pl={10} pr={6} py={6}>
        <Text fontSize={"xl"}>Films</Text>
        <Button bg="" onClick={() => setGrid(!grid)}>
          {grid ? <Image src={switch0}></Image> : <Image src={switch1}></Image>}
        </Button>
      </HStack>
      {error && <p color="red">{error}</p>}
      {loading && <Spinner color="white">loading</Spinner>}
      {!grid && (
        <TableContainer pl={10} pr={10}>
          <Table size="sm">
            <Tr>
              <Td bg="#344064" borderLeftRadius={10} p={4} color={"white"}>
                <Text fontSize={"xl"}>Name</Text>
              </Td>
              <Td bg="#344064" p={4} color={"white"}>
                <Text fontSize={"xl"}>Director</Text>
              </Td>
              <Td bg="#344064" p={4} color={"white"}>
                <Text fontSize={"xl"}>Release Date</Text>
              </Td>
              <Td
                bg="#344064"
                borderRightRadius={10}
                p={4}
                color={"white"}
              ></Td>
            </Tr>

            <Tbody>
              {films.map(
                (film) =>
                  !grid && (
                    <Tr key={film.title}>
                      <Td pt={5} pb={5}>
                        <HStack>
                          <Image src={FilmLogo}></Image>
                          <Text fontSize={"xl"}>{film.title}</Text>
                        </HStack>
                      </Td>
                      <Td pt={5} pb={5}>
                        <Text fontSize={"xl"}>{film.director}</Text>
                      </Td>
                      <Td pt={5} pb={5}>
                        <Text fontSize={"xl"}>
                          {moment(film.release_date).format("MMMM D,YYYY")}
                        </Text>
                      </Td>
                      <Td>
                        <Button bg="">
                          <Image src={Menu}></Image>
                        </Button>
                      </Td>
                    </Tr>
                  )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      )}
      <SimpleGrid columns={3} spacing={6} px={10}>
        {films.map(
          (film) => grid && <FilmCard key={film.title} film={film}></FilmCard>
        )}
      </SimpleGrid>
    </>
  );
};

export default Films;
