import { useState } from "react";

import { HStack, Spinner, Button, Image, Text } from "@chakra-ui/react";
import useFilms from "../hooks/useFilms";
import switch0 from "../assets/switch0.svg";
import switch1 from "../assets/switch1.svg";
import FilmsTable from "./film-components/FilmsTable";
import FilmGrid from "./film-components/FilmGrid";

const Films = () => {
  const [grid, setGrid] = useState(true);

  return (
    <>
      <HStack justifyContent={"space-between"} pl={10} pr={6} py={6}>
        <Text fontSize={"xl"}>Films</Text>
        <Button
          bg=""
          onClick={() => setGrid(!grid)}
          _hover={{ bg: "" }}
          p={0}
          mr={4}
        >
          {grid ? <Image src={switch0}></Image> : <Image src={switch1}></Image>}
        </Button>
      </HStack>
      {grid ? <FilmGrid /> : <FilmsTable />}
    </>
  );
};

export default Films;
