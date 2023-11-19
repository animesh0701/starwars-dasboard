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
import useSpecies from "../../hooks/useSpecies";

interface Props {
  icon: string;
}

const SpeciesAccordian = ({ icon }: Props) => {
  const { data, error, loading } = useSpecies();
  return (
    <div>
      <Accordion allowToggle color="white">
        {data.map((data) => (
          <AccordionItem key={data.name} border="none">
            <AccordionButton
              _expanded={{ bg: "#344064", color: "white" }}
              borderRadius={10}
              pt={4}
              pb={4}
              pl={5}
            >
              <Image src={icon}></Image>
              <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
                <Text fontSize={"xl"}>{data.name}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize={"lg"}>Class- {data.classification}</Text>
              <Text fontSize={"xs"}>Designation- {data.designation}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SpeciesAccordian;
