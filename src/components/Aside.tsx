import React from "react";
import { categories } from "./Categories";
import { Box, Image, Spinner } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import fileLogo from "../assets/Vector.svg";
import useFilms from "../hooks/useFilms";

const Aside = () => {
  const { films, error, loading } = useFilms();
  return (
    <Accordion allowToggle color="white">
      {categories.map((category) => (
        <AccordionItem key={category.type}>
          <h2>
            <AccordionButton _expanded={{ bg: "#CB1A80", color: "white" }}>
              <Image src={fileLogo}></Image>
              <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
                {category.type}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <List spacing={3}>
              {error && <p color="red">{error}</p>}
              {loading && <Spinner color="white">loading</Spinner>}
              {category.type === "Films" &&
                films.map((film) => (
                  <ListItem key={film.title}>
                    <Image src={category.image}></Image>
                    {film.title}
                  </ListItem>
                ))}
              <ListItem>
                {}
                <span>Film 1</span>
              </ListItem>
            </List>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Aside;
