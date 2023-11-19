import moment from "moment"; //moment.js for date format

import {
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  HStack,
  Image,
  Text,
  Thead,
} from "@chakra-ui/react"; //Chakra UI components

import useFilms from "../../hooks/useFilms"; //film hook import

import { PopperMenu } from "./PopperMenu"; //components import
import SkeletonTable from "./SkeletonTable";

import FilmLogo from "../../assets/icons/films.svg"; //icon import

const FilmsTable = () => {
  const { data, error, loading } = useFilms();
  return (
    <>
      <TableContainer pl={10} pr={10}>
        <Table size="sm">
          <Thead>
            <Tr>
              <Td bg="#344064" borderLeftRadius={10} p={4} color={"white"}>
                <Text fontSize={["sm", "lg", "xl"]}>Name</Text>
              </Td>
              <Td bg="#344064" p={4} color={"white"}>
                <Text fontSize={["sm", "lg", "xl"]}>Director</Text>
              </Td>
              <Td bg="#344064" p={4} color={"white"}>
                <Text fontSize={["sm", "lg", "xl"]}>Release Date</Text>
              </Td>
              <Td
                bg="#344064"
                borderRightRadius={10}
                p={4}
                color={"white"}
              ></Td>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((film) => (
              <Tr key={film.title} w={10000}>
                <Td pt={5} pb={5}>
                  <HStack>
                    <Image src={FilmLogo}></Image>
                    <Text fontSize={["sm", "lg", "xl"]}>{film.title}</Text>
                  </HStack>
                </Td>
                <Td pt={5} pb={5}>
                  <Text fontSize={["sm", "lg", "xl"]}>{film.director}</Text>
                </Td>
                <Td pt={5} pb={5}>
                  <Text fontSize={["sm", "lg", "xl"]}>
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
      {loading && <SkeletonTable />}
    </>
  );
};

export default FilmsTable;
