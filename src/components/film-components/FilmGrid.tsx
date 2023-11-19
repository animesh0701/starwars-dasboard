import { SimpleGrid } from "@chakra-ui/react"; //chakra UI component

import useFilms from "../../hooks/useFilms"; //Film hook import

import FilmCard from "./FilmCard";
import SkeletonCard from "./SkeletonCard"; // film related components import

const FilmGrid = () => {
  const { data, error, loading } = useFilms();
  const skeletons = [1, 2, 3, 4, 5, 6]; // a dummy array to just iterate over

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
