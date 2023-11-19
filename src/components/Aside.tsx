import { categories } from "./Categories";  //category array import

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";               //Chakra UI component

import fileLogo from "../assets/Vector.svg";        //Icon import

import SpeciesAccordian from "./accordians/SpeciesAccordian";
import PlanetsAccordian from "./accordians/PlanetsAccordian";
import VehiclesAccordian from "./accordians/VehiclesAccordian";
import StarshipsAccordian from "./accordians/StarshipsAccordian";
import PeopleAccordian from "./accordians/PeopleAccordian";
import FilmsAccordian from "./accordians/FilmsAccordian";      //Sub-accordian imports

const Aside = () => {
  return (
    <Accordion allowToggle color="white" mt={3} w="100%">
      {categories.map((category) => (
        <AccordionItem
          key={category.type}
          border="none"
          ml={5}
          fontSize={["sm", "lg", "xl"]}
        >
          <AccordionButton
            _expanded={{ bg: "#CB1A80", color: "white" }}
            borderRadius={10}
            pt={4}
            pb={4}
            pl={5}
          >
            <Image src={fileLogo} boxSize="24px"></Image>
            <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
              <Text fontSize={["sm", "lg", "xl"]}>{category.type}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            {category.type === "Films" && (
              <FilmsAccordian icon={category.image} />
            )}
            {category.type === "Species" && (
              <SpeciesAccordian icon={category.image} />
            )}
            {category.type === "Planets" && (
              <PlanetsAccordian icon={category.image} />
            )}
            {category.type === "Vehicles" && (
              <VehiclesAccordian icon={category.image} />
            )}
            {category.type === "Starships" && (
              <StarshipsAccordian icon={category.image} />
            )}
            {category.type === "People" && (
              <PeopleAccordian icon={category.image} />
            )}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Aside;
