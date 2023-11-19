import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import useFilms from "../../hooks/useFilms";
import FilmCard from "./FilmCard";
import SkeletonCard from "./SkeletonCard";

const FilmGrid = () => {
  const { data, error, loading } = useFilms();
  const skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} px={10}>
      {loading && skeletons.map((skeleton) => <SkeletonCard key={skeleton} />)}
      {data.map((film) => (
        <FilmCard key={film.title} film={film}></FilmCard>
      ))}
    </SimpleGrid>
  );
};

export default FilmGrid;
