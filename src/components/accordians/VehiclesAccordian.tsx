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
import useVehicles from "../../hooks/useVehicles"; //custom Interface for specifc data

interface Props {
  icon: string;
}

const VehiclesAccordian = ({ icon }: Props) => {
  const { data, error, loading } = useVehicles();
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
              <Text fontSize={"lg"}>Model- {data.model}</Text>
              <Text fontSize={"xs"}>Manufacturer- {data.manufacturer}</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default VehiclesAccordian;
