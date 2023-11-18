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
    <Card>
      <Image src="https://picsum.photos/50"></Image>
      <CardBody bg="grey">
        <HStack>
          <Image src={Films}></Image>
          <Text>{film.title}</Text>
          <Button padding={0} bg={"black"} margin={0}>
            <Image src={MenuButton}></Image>
          </Button>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default FilmCard;
