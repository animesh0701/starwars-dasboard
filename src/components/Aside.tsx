import React from "react";
import { categories } from "./Categories";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Box,
  Image,
  Spinner,
} from "@chakra-ui/react";
import fileLogo from "../assets/Vector.svg";
import useFilms from "../hooks/useFilms";
import SubAccordian from "./SubAccordian";

const Aside = () => {
  const { films, error, loading } = useFilms();
  return (
    <Accordion allowToggle color="white" mt={5}>
      {categories.map((category) => (
        <AccordionItem
          key={category.type}
          border="none"
          ml={5}
          fontSize={"large"}
        >
          <AccordionButton
            _expanded={{ bg: "#CB1A80", color: "white" }}
            borderRadius={10}
            pt={4}
            pb={4}
            pl={5}
          >
            <Image src={fileLogo}></Image>
            <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
              <Text fontSize={"xl"}>{category.type}</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel>
            {error && <p color="red">{error}</p>}
            {loading && <Spinner color="white">loading</Spinner>}
            {category.type === "Films" && <SubAccordian films={films} />}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default Aside;
