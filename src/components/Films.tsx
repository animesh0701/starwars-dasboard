import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { HStack, Spinner } from "@chakra-ui/react";
import useFilms from "../hooks/useFilms";
import FilmCard from "./FilmCard";

const Films = () => {
  const { films, error, loading } = useFilms();

  return (
    <>
      <HStack>
        <h2>Films</h2>
      </HStack>
      {error && <p color="red">{error}</p>}
      {loading && <Spinner color="white">loading</Spinner>}
      <UnorderedList color="white">
        {films.map((film) => (
          <ListItem key={film.title}>{film.title}</ListItem>
        ))}
      </UnorderedList>
      <SimpleGrid columns={3} spacing={10}>
        {films.map((film) => (
          <FilmCard key={film.title} film={film}></FilmCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Films;
