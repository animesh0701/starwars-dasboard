import { useState } from "react"; //react imports

import { HStack, Button, Image, Text } from "@chakra-ui/react"; //chakra Ui imports

import switch0 from "../../public/Switch0.svg";
import switch1 from "../../public/Switch1.svg"; //Icon imports

import FilmsTable from "./film-components/FilmsTable";
import FilmGrid from "./film-components/FilmGrid"; //Film Sub componets imports

const Films = () => {
  const [grid, setGrid] = useState(true); //Grid/list switch state variable

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
