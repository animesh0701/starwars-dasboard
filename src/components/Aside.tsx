import React from "react";
import { categories } from "./Categories";
import { Box, Image } from "@chakra-ui/react";
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
import films from "../assets/icons/films.svg";
import people from "../assets/icons/people.svg";
import planets from "../assets/icons/planets.svg";
import species from "../assets/icons/species.svg";
import starships from "../assets/icons/starships.svg";
import vehicles from "../assets/icons/vehicles.svg";

const Aside = () => {
  return (
    <Accordion allowToggle color="white">
      {categories.map((category) => (
        <AccordionItem key={category}>
          <h2>
            <AccordionButton _expanded={{ bg: "#CB1A80", color: "white" }}>
              <Image src={fileLogo}></Image>
              <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
                {category}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <List spacing={3}>
              <ListItem>
                <Image src={category}></Image>
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
