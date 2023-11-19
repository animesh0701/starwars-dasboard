import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import FilmCard from "./FilmCard";

const FilmGrid = () => {
  const { data, error, loading } = useFilms();
  return (
    <SimpleGrid columns={3} spacing={6} px={10}>
      {data.map((film) => (
        <FilmCard key={film.title} film={film}></FilmCard>
      ))}
    </SimpleGrid>
  );
};

export default FilmGrid;
