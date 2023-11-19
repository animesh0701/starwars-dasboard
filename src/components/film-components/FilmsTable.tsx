import React from "react";
import moment from "moment";

import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import { PopperMenu } from "./PopperMenu";
import FilmLogo from "../../assets/icons/films.svg";

const FilmsTable = () => {
  const { data, error, loading } = useFilms();
  return (
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
          <Td bg="#344064" borderRightRadius={10} p={4} color={"white"}></Td>
        </Tr>

        <Tbody>
          {data.map((film) => (
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
                <PopperMenu film={film} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default FilmsTable;
