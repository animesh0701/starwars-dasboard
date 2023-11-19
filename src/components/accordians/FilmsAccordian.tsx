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

import useFilms from "../../hooks/useFilms";
import moment from "moment";

interface Props {
  icon: string;
}

const FilmsAccordian = ({ icon }: Props) => {
  const { data, error, loading } = useFilms();
  return (
    <div>
      <Accordion allowToggle color="white">
        {data.map((data) => (
          <AccordionItem key={data.title} border="none">
            <AccordionButton
              _expanded={{ bg: "#344064", color: "white" }}
              borderRadius={10}
              pt={4}
              pb={4}
              pl={5}
            >
              <Image src={icon}></Image>
              <Box as="span" flex="1" textAlign="left" paddingLeft="10px">
                <Text fontSize={"xl"}>{data.title}</Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
              <Text fontSize={"lg"}>
                {" "}
                Release-
                {moment(data.release_date).format("MMMM D,YYYY")}
              </Text>
              <Text fontSize={"xs"}>Director- {data.director}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FilmsAccordian;
