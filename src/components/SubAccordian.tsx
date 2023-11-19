import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { Film } from "../hooks/useFilms";
import fileLogo from "../assets/Vector.svg";
import Films from "../assets/icons/films.svg";

interface Props {
  films: Film[];
}

const SubAccordian = ({ films }: Props) => {
  return (
    <Accordion allowToggle color="white">
      {films.map((film) => (
        <AccordionItem key={film.title} border="none">
          <AccordionButton
            _expanded={{ bg: "#CB1A80", color: "white" }}
            borderRadius={10}
            pt={4}
            pb={4}
            pl={5}
          >
            <Image src={Films}></Image>
            <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
              <Text fontSize={"xl"}>{film.title}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text fontSize={"sm"}>Director : {film.director}</Text>
            <Text fontSize={"xs"}>{film.opening_crawl}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default SubAccordian;
