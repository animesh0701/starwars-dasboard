import React from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { HStack, Spinner } from "@chakra-ui/react";
import useFilms from "../hooks/useFilms";

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
    </>
  );
};

export default Films;
