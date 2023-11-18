import React from "react";
import Films from "../assets/icons/films.svg";
import MenuButton from "../assets/MenuButton.svg";
import { Film } from "../hooks/useFilms";
import {
  Card,
  Image,
  CardBody,
  HStack,
  Button,
  ButtonGroup,
  Text,
} from "@chakra-ui/react";

interface Props {
  film: Film;
}

const FilmCard = ({ film }: Props) => {
  return (
    <Card bg="transparent">
      <Image
        src="https://picsum.photos/50"
        borderRadius={10}
        marginBottom={1.5}
        h={180}
      ></Image>
      <CardBody bg="#344064" borderRadius={10} p={4}>
        <HStack justifyContent={"space-between"}>
          <HStack>
            <Image src={Films}></Image>
            <Text fontSize={"xl"} color={"white"}>
              {film.title}
            </Text>
          </HStack>

          <Button padding={0} bg={""} margin={0}>
            <Image src={MenuButton}></Image>
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default FilmCard;
